import React, { useContext, useEffect, useState } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { InitialRouteContext } from "../../common/context/context";
import { getUserInfo } from "./assets/apis/getUserInfo";
import {
  ImageBtn,
  ImageBtnText,
  BackButton,
  Header,
  StyledButton,
  StyledText,
  Container,
  LogoutdText,
  Label,
  Input,
} from "./userInfo.style";
import back from "./../home/assets/images/back.png";
import userIcon from "../home/assets/images/Vector.png";

function UserInfo() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const { setInitialRoute } = useContext(InitialRouteContext);

  // 유저 정보 저장 함수
  const saveUserInfo = () => {
    // 유저 정보 저장
    // 이것두 recoil~~~
  };

  const handleLogout = async () => {
    const autoLogin = await AsyncStorage.getItem("autoLogin");

    // if (autoLogin !== "true") {
    //   await AsyncStorage.removeItem("username");
    //   await AsyncStorage.removeItem("password");
    //   await AsyncStorage.removeItem("name");
    //   await AsyncStorage.removeItem("accessToken");
    //   await AsyncStorage.removeItem("autoLogin");
    // }
    await AsyncStorage.removeItem("username");
    await AsyncStorage.removeItem("password");
    await AsyncStorage.removeItem("name");
    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("autoLogin");

    setInitialRoute("Landing");

    navigation.reset({
      index: 0,
      routes: [{ name: "Landing" }],
    });
  };

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        setName(userInfo.data.name);
        setGender(userInfo.data.gender);
        setAge(userInfo.data.age.toString());
      } catch (error) {
        console.error("Failed to load user info", error);
      }
    };

    loadUserInfo();
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Image source={back} style={{ width: 36, height: 36 }} />
        </BackButton>

        <Image
          source={userIcon}
          style={{ marginTop: 50, width: 80, height: 80 }}
        />
      </Header>
      <ImageBtn onPress={handleLogout}>
        <LogoutdText>로그아웃</LogoutdText>
      </ImageBtn>
      {/* 
      <TouchableOpacity style={styles.deleteBtn}>
        <Text style={styles.deleteBtnText}>이미지 삭제</Text>
      </TouchableOpacity> */}

      <Label>이름</Label>
      <Input
        editable={false}
        returnKeyType="done"
        placeholder="이름"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Label>성별</Label>
      <Input
        returnKeyType="done"
        placeholder="성별"
        value={gender}
        onChangeText={(text) => setGender(text)}
      />

      <Label>나이</Label>
      <Input
        returnKeyType="done"
        keyboardType="number-pad"
        placeholder="나이"
        value={age}
        onChangeText={(text) => setAge(text)}
      />

      <StyledButton onPress={saveUserInfo}>
        <StyledText>저장하기</StyledText>
      </StyledButton>

      {/* <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutBtnText}>로그아웃</Text>
      </TouchableOpacity> */}
    </Container>
  );
}

export default UserInfo;
