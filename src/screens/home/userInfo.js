import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  StoreBtn,
  StoreText,
  UserInput,
  UserText,
  UserImageBtn,
} from "../../styles/styles";

function UserInfo() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  //   const saveImage = () => {
  //   };

  //   const deleteImage = () => {
  //   };

  const saveUserInfo = () => {
    // 유저 정보 저장
    // 이것두 recoil~~~
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require("../home/assets/images/Vector.png")}
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />

      <UserImageBtn>
        <Text style={{ fontWeight: 500, marginTop: 10 }}>이미지 선택</Text>
      </UserImageBtn>

      <TouchableOpacity style={{ marginTop: 20 }}>
        <Text style={{ marginBottom: 20 }}>이미지 삭제</Text>
      </TouchableOpacity>

      <UserText>이름</UserText>
      <UserInput
        returnKeyType="done"
        placeholder="이름"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <UserText>성별</UserText>
      <UserInput
        returnKeyType="done"
        placeholder="성별"
        value={gender}
        onChangeText={(text) => setGender(text)}
      />

      <UserText>나이</UserText>
      <UserInput
        returnKeyType="done"
        keyboardType="number-pad"
        placeholder="나이"
        value={age}
        onChangeText={(text) => setAge(text)}
      />

      <StoreBtn onPress={saveUserInfo}>
        <StoreText>저장하기</StoreText>
      </StoreBtn>

      <StoreBtn onPress={() => navigation.goBack()}>
        <StoreText>뒤로가기</StoreText>
      </StoreBtn>
    </View>
  );
}

export default UserInfo;
