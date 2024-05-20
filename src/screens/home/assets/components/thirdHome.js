import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  HomeText,
  BackImage,
  SecondHomeTextView,
  UserText,
  ThirdText,
  BackBtn,
  ThirdPlaceInput,
  StoreText,
  StoreBtn,
  ThirdHomeText,
  ThirdMemoInput,
  ThirdPicInput,
} from "../../../../styles/styles";
import { useRecoilState } from "recoil";
import {
  EmotionState,
  MemoState,
  LocationState,
  ImageState,
  ActivityState,
} from "../../../../common/recoil/atoms";
import backicon from "../images/back.png";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import { sendToServer } from "../apis/sendToServer";
import {
  AddButton,
  AddButtonText,
  ImageWrapper,
  RemoveButton,
  RemoveButtonText,
  StyledImage,
  StyledThirdPicInput,
  TextContainer,
} from "./third.style";

const ThirdHome = ({ onActivitySave }) => {
  const navigation = useNavigation();
  const [emotion, setEmotion] = useRecoilState(EmotionState);
  const [activityId, setActivityId] = useRecoilState(ActivityState);
  const [memo, setMemo] = useRecoilState(MemoState);
  const [location, setLocation] = useRecoilState(LocationState);
  const [image, setImage] = useRecoilState(ImageState);
  const [city, setCity] = useState("📌 위치 가져오는중 ...");
  const [errorMsg, setErrorMsg] = useState(null);
  const [userCity, setUserCity] = useState("");
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("위치 권한을 허용해야 합니다.");
        setLocationEnabled(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      const currentCountry = `${reverseGeocode[0].country}`;
      const currentCity = `${reverseGeocode[0].city} ${reverseGeocode[0].district}`;
      setCity(currentCity);
      setLocation(currentCity);
      setUserCity(currentCity);
      setLatitude(latitude);
      setLongitude(longitude);
      setCountry(currentCountry);
    } catch (error) {
      console.error("위치 정보를 가져오는 중 오류 발생:", error);
      setErrorMsg("위치 정보를 가져오는 중 오류가 발생했습니다.");
    }
  };

  const handleImagePick = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("사진 접근 권한을 허용해야 합니다.");
        return;
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
      });
      console.log(result);

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setSelectedImage(result.assets[0].uri);
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("이미지를 선택하는 중 오류 발생:", error);
    }
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    setImage(null);
  };

  const saveAll = async () => {
    try {
      console.log(
        "emotion:",
        emotion,
        "memo:",
        memo,
        "location:",
        location,
        "image:",
        image
      );
      await sendToServer(
        emotion,
        activityId,
        memo,
        location,
        image,
        latitude,
        longitude,
        country
      );
      onActivitySave();
      console.log("데이터가 서버에 저장되었습니다.");
    } catch (error) {
      if (error.response) throw error;
    }
  };

  return (
    <View>
      <BackBtn onPress={() => navigation.goBack()}>
        <BackImage source={backicon} />
      </BackBtn>

      <SecondHomeTextView>
        <HomeText>메모할 내용이 있나요?</HomeText>
        <ThirdHomeText>사진이나 장소를 추가하세요</ThirdHomeText>
        {locationEnabled ? (
          <ThirdPlaceInput
            placeholder="  📌 장소 추가하기"
            style={{ marginTop: 30 }}
            value={userCity ? `📌 ${userCity}` : `📌 ${city}`}
          />
        ) : (
          <View>
            <ThirdPlaceInput
              placeholder=" 장소를 직접 입력해주세요! ex)서울특별시 상도동"
              style={{ marginTop: 30 }}
              value={userCity}
              onChangeText={(text) => setUserCity(text)}
            />
            <Text
              style={{ textAlign: "center", marginBottom: 10, color: "red" }}
            >
              {errorMsg}
            </Text>
          </View>
        )}

        <View>
          <UserText>메모</UserText>
        </View>
        <ThirdMemoInput
          placeholder="  📝 메모 추가하기"
          style={{ marginTop: 10 }}
          value={memo}
          onChangeText={(text) => setMemo(text)}
        />

        <UserText>사진</UserText>
        <ThirdPicInput onPress={handleImagePick} style={{ marginTop: 10 }}>
          <StyledThirdPicInput>
            <TextContainer>
              <ThirdText>📸 사진 추가하기</ThirdText>
              {/* <ThirdText>이미지는 최대 1개까지 첨부 가능합니다</ThirdText> */}
            </TextContainer>
            {selectedImage && (
              <ImageWrapper>
                <StyledImage source={{ uri: selectedImage }} />
                <RemoveButton onPress={handleImageRemove}>
                  <RemoveButtonText>X</RemoveButtonText>
                </RemoveButton>
              </ImageWrapper>
            )}
          </StyledThirdPicInput>
        </ThirdPicInput>
        <StoreBtn onPress={saveAll}>
          <StoreText>저장하기</StoreText>
        </StoreBtn>
      </SecondHomeTextView>
    </View>
  );
};

export default ThirdHome;
