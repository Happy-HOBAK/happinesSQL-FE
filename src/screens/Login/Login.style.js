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
  height: 55px;
  /* min-height: 10%; */
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
  padding: 10px;
  margin: 10%;
  border-width: 1px;
  border-color: #ccc;
  margin-top: 5px;
  border-radius: 10px;
  height: 50px;
  /* min-height: 6%; */
`;

export const ErrorMessage = styled.Text`
  color: red;
  margin-top: 10px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  height: 20px;
`;

export const CheckBoxContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-left: 16%;
  margin-bottom: 20px;
`;

export const CheckBox = styled.View`
  width: 20px;
  height: 20px;
  border-color: ${theme.grey_3};
  border-width: 1px;
  border-radius: 4px;
  background-color: ${(props) => (props.checked ? theme.main : "#fff")};
  justify-content: center;
  align-items: center;
`;

export const CheckBoxLabel = styled.Text`
  margin-left: 10px;
`;
