import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components";
import {
  StyledButton,
  StyledSubTitleText,
  StyledText,
  StyledTitleText,
  ErrorMessage,
  StyledSignupView,
  StyledTextInput,
  InputContainer,
} from "./Login.style";
import { postLogin } from "./apis/postLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!username || !password) {
      setError(true);
      return;
    }
    setError(false);
    try {
      const response = await postLogin(username, password);
      if (response.success) {
        await AsyncStorage.setItem("accessToken", response.data.accessToken);
        navigation.reset({
          index: 0,
          routes: [{ name: "Tabs" }],
        });
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      setError(true);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      enableOnAndroid={true}
      extraHeight={150}
      extraScrollHeight={150}
    >
      <StyledSignupView>
        <StyledTitleText>로그인</StyledTitleText>

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

        <StyledButton onPress={handleLogin}>
          <StyledText>로그인 하기</StyledText>
        </StyledButton>
      </StyledSignupView>
    </KeyboardAwareScrollView>
  );
};
