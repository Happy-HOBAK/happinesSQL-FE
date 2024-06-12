import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { HomeText, RecordTextView, MapReportBox } from "../../styles/styles";
import { getActivities } from "../home/assets/apis/getActivity";
import {
  UserText,
  SubText,
  LeftText,
  FocusText,
  CriteriaButton,
  CriteriaButtonText,
  TitleText,
  SubTitleText,
  NumtitleText,
  NumText,
  ImojiText,
  ModalBackground,
  ModalContainer,
  ModalTitle,
  ModalText,
  ReportBox,
  FirstReportBox,
  ActivityReportBox,
  SecondReportBox,
  FourthReportBox,
  ThirdReportBox,
  SubFocusText,
  CircleContainer,
  ButtonText,
  BlueBox,
  BlueBoxText,
  Button,
  MapContainer,
} from "./trends.style";
import reload from "./assets/icons/reload.png";
import CircleItem from "./assets/components/CircleComponent/Circle";
import RectangleItem from "./assets/components/Rectangle";
import CustomDropdown from "./assets/components/Dropdown";
import MapView, { Marker } from "react-native-maps";
import {
  getHappiness,
  getLocation,
  getPopular,
  getRecommend,
  getSummary,
} from "./assets/apis/getTrends";

function Trends() {
  const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAge, setSelectedAge] = useState("전체");
  const [selectedGender, setSelectedGender] = useState("전체");
  const [recommendLoading, setRecommendLoading] = useState(false);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 37.5665,
    longitude: 126.978,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [data, setData] = useState({
    happiness: null,
    popular: null,
    recommend: null,
    locations: null,
    summary: null,
  });

  const ageItems = [
    { label: "10대", value: "10대" },
    { label: "20대", value: "20대" },
    { label: "30대", value: "30대" },
    { label: "40대", value: "40대" },
    { label: "50대", value: "50대" },
    { label: "전체", value: "전체" },
  ];

  const genderItems = [
    { label: "여성", value: "여성" },
    { label: "남성", value: "남성" },
    { label: "전체", value: "전체" },
  ];

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [happinessData, popularData, recommendData, locationsData] =
        await Promise.all([
          getHappiness(),
          getPopular(),
          getRecommend(),
          getLocation(),
        ]);
      console.log(locationsData);

      setData({
        happiness: happinessData,
        popular: popularData,
        recommend: recommendData,
        locations: locationsData,
      });
      if (
        locationsData &&
        locationsData.data &&
        locationsData.data.length > 0
      ) {
        const topLocation = locationsData.data[0];
        setSelectedLocation({
          latitude: topLocation.latitude || 37.5665,
          longitude: topLocation.longitude || 126.978,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const reloadRecommendations = async () => {
    setRecommendLoading(true);
    try {
      const recommendData = await getRecommend();
      setData((prevState) => ({
        ...prevState,
        recommend: recommendData,
      }));
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    } finally {
      setRecommendLoading(false);
    }
  };

  const fetchSummary = async () => {
    setSummaryLoading(true);
    try {
      const summaryData = await getSummary(
        selectedAge === "전체" ? undefined : selectedAge,
        selectedGender === "전체" ? undefined : selectedGender
      );
      setData((prevState) => ({
        ...prevState,
        summary: summaryData,
      }));
    } catch (error) {
      console.error("Error fetching summary:", error);
    } finally {
      setSummaryLoading(false);
    }
  };

  const handleLocationSelect = (location) => {
    if (location.latitude && location.longitude) {
      setSelectedLocation({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F3F4F6" }}>
      <RecordTextView style={{ backgroundColor: "#F3F4F6" }}>
        <HomeText>행복 트렌드</HomeText>
        <ScrollView>
          <ReportBox>
            <UserText>대한민국 사람들의</UserText>
            <LeftText>평균 행복지수는</LeftText>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {data.happiness ? (
                <FocusText>{data.happiness.data.level}</FocusText>
              ) : (
                <></>
              )}
              <LeftText>이에요</LeftText>
              {data.happiness ? (
                <FocusText>{data.happiness.data.emoji}</FocusText>
              ) : (
                <></>
              )}
            </View>
            <CriteriaButton onPress={() => setModalVisible(true)}>
              <CriteriaButtonText>기준이 궁금해요!</CriteriaButtonText>
            </CriteriaButton>
          </ReportBox>

          <FirstReportBox>
            <SubText>행복도가 높았던 활동을</SubText>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SubText>추천해드릴게요</SubText>
              <TouchableOpacity onPress={reloadRecommendations}>
                <Image
                  source={reload}
                  style={{ marginLeft: 5, height: 28, width: 28 }}
                />
              </TouchableOpacity>
            </View>

            <CircleContainer>
              {data.recommend && data.recommend.data ? (
                data.recommend.data.map((activity, index) => (
                  <CircleItem
                    key={index}
                    emoji={activity.emoji}
                    text={activity.name}
                  />
                ))
              ) : (
                <></>
              )}
            </CircleContainer>
          </FirstReportBox>

          <ActivityReportBox>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SubText>오늘은 </SubText>
              {data.popular &&
              data.popular.data &&
              data.popular.data.length > 0 ? (
                <SubFocusText>{data.popular.data[0].name}</SubFocusText>
              ) : (
                <></>
              )}
              <SubText>를</SubText>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SubText>한 사람이 많았어요! </SubText>
              {data.popular &&
              data.popular.data &&
              data.popular.data.length > 0 ? (
                <SubText>{data.popular.data[0].emoji}</SubText>
              ) : (
                <></>
              )}
            </View>
            <CircleContainer>
              {data.popular &&
                data.popular.data.map((activity) => (
                  <RectangleItem
                    key={activity.ranking}
                    emoji={activity.emoji}
                    text={activity.name}
                    record={`${activity.times}회 기록`}
                  />
                ))}
            </CircleContainer>
          </ActivityReportBox>

          <ThirdReportBox>
            <SubText>다른 유저는 {"\n"}이럴 때 행복했어요 🍀</SubText>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <CustomDropdown
                selectedValue={selectedAge}
                onValueChange={(itemValue) => setSelectedAge(itemValue)}
                items={ageItems}
                placeholder="연령대"
              />
              <CustomDropdown
                selectedValue={selectedGender}
                onValueChange={(itemValue) => setSelectedGender(itemValue)}
                items={genderItems}
                placeholder="성별"
              />
              <Button onPress={fetchSummary}>
                <ButtonText>조회</ButtonText>
              </Button>
            </View>
            <BlueBox>
              {data.summary && data.summary.data ? (
                typeof data.summary.data === "string" ? (
                  <BlueBoxText>{data.summary.data}</BlueBoxText>
                ) : (
                  <BlueBoxText>
                    {data.summary.data.location}에서{"\n"}
                    {data.summary.data.time_of_day}에{"\n"}
                    {data.summary.data.activity}할 때
                  </BlueBoxText>
                )
              ) : (
                <BlueBoxText>연령대, 성별을 선택해주세요!</BlueBoxText>
              )}
            </BlueBox>
          </ThirdReportBox>

          <FourthReportBox>
            <SubText>오늘 많은 사람들이</SubText>
            <SubText>이곳에서 행복감을 느꼈어요</SubText>

            {data.locations && data.locations.data ? (
              data.locations.data.map((location, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleLocationSelect(location)}
                >
                  <SecondReportBox>
                    <NumText>{location.ranking}</NumText>
                    <NumtitleText>
                      {location.location || "정보 없음"}
                    </NumtitleText>
                  </SecondReportBox>
                </TouchableOpacity>
              ))
            ) : (
              <></>
            )}

            <MapContainer>
              <MapView style={{ flex: 1 }} region={selectedLocation}>
                {data.locations &&
                  data.locations.data &&
                  data.locations.data.length > 0 &&
                  data.locations.data.map(
                    (location, index) =>
                      location.latitude &&
                      location.longitude && (
                        <Marker
                          key={index}
                          coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                          }}
                          title={location.location}
                          description={location.happiestActivity}
                        />
                      )
                  )}
              </MapView>
            </MapContainer>
          </FourthReportBox>
          <View style={{ height: 100 }} />
        </ScrollView>
      </RecordTextView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <ModalBackground>
            <TouchableOpacity
              activeOpacity={1}
              onPress={(e) => e.stopPropagation()}
            >
              <ModalContainer>
                <ModalTitle>행복지수 범위는 1부터 7까지예요</ModalTitle>
                <ModalText>매우 낮음 : 0 이상 2 미만</ModalText>
                <ModalText>낮음 : 3 이상 4 미만</ModalText>
                <ModalText>보통 : 4 이상 5 미만</ModalText>
                <ModalText>높음 : 5 이상 6 미만</ModalText>
                <ModalText>매우 높음 : 6 이상 7 미만</ModalText>
              </ModalContainer>
            </TouchableOpacity>
          </ModalBackground>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

export default Trends;
