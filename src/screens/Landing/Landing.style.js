import styled from "styled-components";
import { Dimensions } from "react-native";
import { theme } from "./../../styles/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const StyledLandingView = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  width: 250px;
  height: 50px;
  background-color: ${(props) => theme.main};
`;

export const StyledText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;
