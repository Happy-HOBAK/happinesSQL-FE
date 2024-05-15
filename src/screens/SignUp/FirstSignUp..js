import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import {
  StyledSignupView,
  StyledTextInput,
  StyledButton,
  StyledText,
  ErrorMessage,
  StyledTitleText,
  StyledSubTitleText,
} from "./SignUp.style";

export const FirstSignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!username || !password) {
      setError(true);
    } else {
      setError(false);
      navigation.navigate("SecondSignUp", { username, password });
    }
  };

  return (
    <StyledSignupView>
      <StyledTitleText>회원가입</StyledTitleText>

      <StyledSubTitleText>아이디</StyledSubTitleText>
      <StyledTextInput
        placeholder="아이디를 입력하세요"
        value={username}
        onChangeText={setUsername}
      />

      <StyledSubTitleText>비밀번호</StyledSubTitleText>
      <StyledTextInput
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <ErrorMessage visible={error}>모든 정보를 입력해주세요!</ErrorMessage>

      <StyledButton onPress={handleNext}>
        <StyledText>다음</StyledText>
      </StyledButton>
    </StyledSignupView>
  );
};
