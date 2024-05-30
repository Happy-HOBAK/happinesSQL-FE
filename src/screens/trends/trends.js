import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
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

function Trends() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAge, setSelectedAge] = useState("20대");
  const [selectedGender, setSelectedGender] = useState("여성");

  const ageItems = [
    { label: "10대", value: "10대" },
    { label: "20대", value: "20대" },
    { label: "30대", value: "30대" },
    { label: "40대", value: "40대" },
    { label: "50대", value: "50대" },
  ];

  const genderItems = [
    { label: "여성", value: "여성" },
    { label: "남성", value: "남성" },
    { label: "전체", value: "전체" },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "#F3F4F6" }}>
      <RecordTextView style={{ backgroundColor: "#F3F4F6" }}>
        <HomeText>행복 트렌드</HomeText>
        <ScrollView>
          <ReportBox>
            <UserText>대한민국 사람들의</UserText>
            <LeftText>평균 행복지수는</LeftText>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FocusText>보통</FocusText>
              <LeftText>이에요</LeftText>
              <FocusText> 🙂</FocusText>
            </View>
            <CriteriaButton onPress={() => setModalVisible(true)}>
              <CriteriaButtonText>기준이 궁금해요!</CriteriaButtonText>
            </CriteriaButton>
          </ReportBox>

          <FirstReportBox>
            <SubText>행복도가 높았던 활동을</SubText>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SubText>추천해드릴게요</SubText>
              <TouchableOpacity>
                <Image
                  source={reload}
                  style={{ marginLeft: 5, height: 28, width: 28 }}
                />
              </TouchableOpacity>
            </View>

            <CircleContainer>
              <CircleItem emoji="🛹" text="보드 타기" />
              <CircleItem emoji="🎨" text="그림 그리기" />
              <CircleItem emoji="🚬" text="사이버 담배" />
            </CircleContainer>
          </FirstReportBox>

          <ActivityReportBox>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SubText>오늘은 </SubText>
              <SubFocusText>보드 타기</SubFocusText>
              <SubText>를</SubText>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SubText>한 사람이 많았어요! </SubText>
              <SubText>🛹</SubText>
            </View>
            <CircleContainer>
              <RectangleItem emoji="🛹" text="보드 타기" record="100회 기록" />
              <RectangleItem emoji="🎨" text="그림 그리기" record="20회 기록" />
              <RectangleItem emoji="🛍️" text="쇼핑하기" record="30회 기록" />
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
              <Button>
                <ButtonText>조회</ButtonText>
              </Button>
            </View>
            <BlueBox>
              <BlueBoxText>
                서울특별시 동작구에서{"\n"}아침에{"\n"}데이트하기할 때
              </BlueBoxText>
            </BlueBox>
          </ThirdReportBox>

          <FourthReportBox>
            <SubText>오늘 많은 사람들이</SubText>
            <SubText>이곳에서 행복감을 느꼈어요</SubText>

            <SecondReportBox>
              <NumText>1</NumText>
              <NumtitleText>서울 동작구 상도동</NumtitleText>
            </SecondReportBox>

            <SecondReportBox>
              <NumText>2</NumText>
              <NumtitleText>서울 동작구 상도동</NumtitleText>
            </SecondReportBox>

            <SecondReportBox>
              <NumText>3</NumText>
              <NumtitleText>잠실나루역</NumtitleText>
            </SecondReportBox>

            <MapContainer>
              <MapView
                style={{ flex: 1 }}
                initialRegion={{
                  latitude: 37.5665,
                  longitude: 126.978,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: 37.5665,
                    longitude: 126.978,
                  }}
                  title="서울특별시 동작구"
                  description="보드타기"
                />
              </MapView>
            </MapContainer>
          </FourthReportBox>
          <View style={{ height: 200 }} />
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
