import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
  justify-content: flex-start;
  padding-top: 50px;
  background-color: #f8f9fa;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const ImageBtn = styled.TouchableOpacity`
  background-color: ${theme.main};
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px 20px;
  width: 135px;
  align-items: center;
`;

export const ImageBtnText = styled.Text`
  color: #fff;
  font-weight: 500;
`;

export const Label = styled.Text`
  align-self: flex-start;
  margin-left: 60px;
  margin-top: 20px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  width: 70%;
  height: 50px;
  border-color: ${theme.grey_2};
  border-width: 2px;
  border-radius: 10px;
  padding-left: 10px;
  margin-top: 10px;
  background-color: #fff;
`;

export const SaveBtn = styled.TouchableOpacity`
  background-color: #007bff;
  border-radius: 5px;
  margin-top: 30px;
`;

export const SaveBtnText = styled.Text`
  color: #fff;
  font-weight: 500;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const Header = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
`;

export const StyledButton = styled.TouchableOpacity`
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 10%;
  width: 70%;
  height: 55px;
  /* min-height: 10%; */
  background-color: ${(props) => theme.main};
`;

export const StyledText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const LogoutdText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
