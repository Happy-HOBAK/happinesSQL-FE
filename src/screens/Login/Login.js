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
  const [error, setError] = useState({ message: "", visible: false });

  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!username || !password) {
      setError({ message: "모든 정보를 입력해주세요!", visible: true });
      return;
    }
    setError({ message: "", visible: false });
    try {
      const response = await postLogin(username, password);
      console.log(response);
      if (response.success) {
        if (response.message === "비밀번호가 틀렸습니다.") {
          setError({ message: "비밀번호가 틀렸습니다.", visible: true });
        } else {
          await AsyncStorage.setItem("accessToken", response.data.accessToken);
          await AsyncStorage.setItem("name", response.data.name);
          navigation.reset({
            index: 0,
            routes: [{ name: "Tabs" }],
          });
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const response = error.response.data;
        if (response.code === 10005) {
          setError({ message: "해당하는 회원이 없습니다.", visible: true });
        }
      } else {
        console.error("로그인 오류:", error);
        setError({ message: "로그인 오류. 다시 시도해주세요.", visible: true });
      }
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

        <ErrorMessage visible={error.visible}>{error.message}</ErrorMessage>

        <StyledButton onPress={handleLogin}>
          <StyledText>로그인 하기</StyledText>
        </StyledButton>
      </StyledSignupView>
    </KeyboardAwareScrollView>
  );
};
