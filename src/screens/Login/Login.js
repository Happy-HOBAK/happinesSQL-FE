import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  StyledButton,
  StyledSubTitleText,
  StyledText,
  StyledTitleText,
  ErrorMessage,
  StyledSignupView,
  StyledTextInput,
  InputContainer,
  CheckBoxContainer,
  CheckBox,
  CheckBoxLabel,
} from "./Login.style";
import { postLogin } from "./apis/postLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ message: "", visible: false });
  const [autoLogin, setAutoLogin] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const checkAutoLogin = async () => {
      const savedUsername = await AsyncStorage.getItem("username");
      const savedPassword = await AsyncStorage.getItem("password");
      const autoLoginEnabled = await AsyncStorage.getItem("autoLogin");

      if (autoLoginEnabled === "true" && savedUsername && savedPassword) {
        setUsername(savedUsername);
        setPassword(savedPassword);
        handleLogin(savedUsername, savedPassword, true);
      }
    };

    checkAutoLogin();
  }, []);

  const handleLogin = async (
    usernameParam = username,
    passwordParam = password,
    autoLoginParam = autoLogin
  ) => {
    if (!usernameParam || !passwordParam) {
      setError({ message: "모든 정보를 입력해주세요!", visible: true });
      return;
    }
    setError({ message: "", visible: false });
    try {
      const response = await postLogin(usernameParam, passwordParam);
      console.log(response);
      if (response.success) {
        if (response.message === "비밀번호가 틀렸습니다.") {
          setError({ message: "비밀번호가 틀렸습니다.", visible: true });
        } else {
          await AsyncStorage.setItem("accessToken", response.data.accessToken);
          await AsyncStorage.setItem("name", response.data.name);

          if (autoLoginParam) {
            await AsyncStorage.setItem("username", usernameParam);
            await AsyncStorage.setItem("password", passwordParam);
            await AsyncStorage.setItem("autoLogin", "true");
          } else {
            await AsyncStorage.removeItem("username");
            await AsyncStorage.removeItem("password");
            await AsyncStorage.setItem("autoLogin", "false");
          }

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

        <CheckBoxContainer onPress={() => setAutoLogin(!autoLogin)}>
          <CheckBox checked={autoLogin}>
            {autoLogin && <Text style={{ color: "#fff" }}>✓</Text>}
          </CheckBox>
          <CheckBoxLabel>자동 로그인</CheckBoxLabel>
        </CheckBoxContainer>

        <ErrorMessage visible={error.visible}>{error.message}</ErrorMessage>

        <StyledButton
          onPress={() => handleLogin(username, password, autoLogin)}
        >
          <StyledText>로그인 하기</StyledText>
        </StyledButton>
      </StyledSignupView>
    </KeyboardAwareScrollView>
  );
};
