import React, { useState } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {
  StyledSignupView,
  StyledTextInput,
  StyledButton,
  StyledText,
  ErrorMessage,
  StyledTitleText,
  StyledSubTitleText,
} from "./SignUp.style";
import { postUserInfo } from "./apis/postUserInfo";

export const SecondSignUp = ({ route, navigation }) => {
  const { username, password } = route.params;
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "여성", value: "여성" },
    { label: "남성", value: "남성" },
    { label: "선택 안함", value: "선택 안함" },
  ]);

  const handleSignUp = async () => {
    if (!name || !gender || !age) {
      setError(true);
    } else {
      setError(false);
      try {
        await postUserInfo(username, password, name, gender, age);
        console.log("회원가입 성공:", {
          username,
          password,
          name,
          gender,
          age,
        });
        navigation.navigate("Landing", {
          message: "회원가입이 완료되었습니다!",
        });
      } catch (error) {
        console.error("회원가입 중 오류 발생:", error);
        setError(true);
      }
    }
  };

  return (
    <StyledSignupView>
      <StyledTitleText>회원가입</StyledTitleText>

      <StyledSubTitleText>이름</StyledSubTitleText>
      <StyledTextInput
        placeholder="이름을 입력하세요"
        value={name}
        onChangeText={setName}
      />

      <StyledSubTitleText>성별</StyledSubTitleText>
      <DropDownPicker
        open={open}
        value={gender}
        items={items}
        setOpen={setOpen}
        setValue={(callback) => setGender(callback)}
        setItems={setItems}
        onSelectItem={(item) => setGender(item.label)}
        containerStyle={{ width: "70%", marginBottom: 40, marginTop: 5 }}
        style={{
          borderColor: "#ccc",
        }}
        dropDownContainerStyle={{
          backgroundColor: "#fafafa",
          borderColor: "#ccc",
        }}
        placeholderStyle={{
          color: "#ccc",
        }}
      />

      <StyledSubTitleText>나이</StyledSubTitleText>
      <StyledTextInput
        placeholder="나이를 입력하세요"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <ErrorMessage visible={error}>모든 정보를 입력해주세요!</ErrorMessage>

      <StyledButton onPress={handleSignUp}>
        <StyledText>회원가입</StyledText>
      </StyledButton>
    </StyledSignupView>
  );
};
