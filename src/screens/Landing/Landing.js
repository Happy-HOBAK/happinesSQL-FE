import { View, Text, Image, TouchableOpacity } from "react-native";
import Logo from "./../../../assets/MainLogo.png";
import Title from "./../../../assets/HappinesSQL.png";
import { StyledButton, StyledLandingView, StyledText } from "./Landing.style";
import { useNavigation } from "@react-navigation/native";
import { Login } from "../Login/Login";
import { SignUp } from "../SignUp/SignUp";
import { FirstSignUp } from "../SignUp/FirstSignUp.";

export const Landing = () => {
  const navigation = useNavigation();

  const handleGoToSignUp = () => {
    navigation.navigate(FirstSignUp);
  };

  const handleGoToLogin = () => {
    navigation.navigate(Login);
  };

  return (
    <StyledLandingView>
      <Image source={Logo} style={{ width: 110, height: 115 }} />
      <Image source={Title} style={{ width: 225, height: 30, marginTop: 30 }} />
      <StyledButton onPress={handleGoToSignUp}>
        <StyledText>회원가입 하기</StyledText>
      </StyledButton>
      <StyledButton onPress={handleGoToLogin}>
        <StyledText>로그인 하기</StyledText>
      </StyledButton>
    </StyledLandingView>
  );
};
