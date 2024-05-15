import { View, Text, TouchableOpacity } from "react-native";
import {
  StyledButton,
  StyledSignupView,
  StyledText,
  StyledSubTitleText,
  StyledTitleText,
  StyledTextInput,
  ErrorMessage,
} from "./SignUp.style";
import { useState } from "react";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    if (!name || !gender || !age) {
      setError("모든 정보를 입력해주세요!");
    } else {
      setError("");
      console.log("회원가입 성공:", { name, gender, age });
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
      <StyledTextInput
        placeholder="성별을 입력하세요"
        value={gender}
        onChangeText={setGender}
      />

      <StyledSubTitleText>나이</StyledSubTitleText>
      <StyledTextInput
        placeholder="나이를 입력하세요"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      {error ? <ErrorMessage>{error}</ErrorMessage> : null}

      <StyledButton onPress={handleSignUp}>
        <StyledText>회원가입</StyledText>
      </StyledButton>
    </StyledSignupView>
  );
};
