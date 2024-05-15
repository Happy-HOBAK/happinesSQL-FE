import styled from "styled-components";
import { Dimensions } from "react-native";
import { theme } from "./../../styles/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const StyledSignupView = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  justify-content: flex-start;
  padding-top: 40%;
`;

export const StyledButton = styled.TouchableOpacity`
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  width: 70%;
  height: 8%;
  background-color: ${(props) => theme.main};
`;

export const StyledText = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: #fff;
`;

export const StyledTitleText = styled.Text`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 8%;
`;

export const StyledSubTitleText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  align-self: flex-start;
  margin-left: 16%;
  margin-bottom: 2%;
`;

export const StyledTextInput = styled.TextInput`
  width: 70%;
  height: 7%;
  padding: 10px;
  margin: 10%;
  border-width: 1px;
  border-color: #ccc;
  margin-top: 5px;
  border-radius: 10px;
`;

export const ErrorMessage = styled.Text`
  color: red;
  margin-top: 10px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  height: 20px;
`;
