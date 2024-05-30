import styled from "styled-components";
import { Dimensions } from "react-native";
import { theme } from "../../styles/theme";

export const NotiText = styled.Text`
  font-size: 12px;
  color: #878787;
  margin-top: 5%;
`;

export const UserText = styled.Text`
  font-size: 15px;
  color: #696969;
  margin-bottom: 3%;
  font-weight: bold;
`;

export const LeftText = styled.Text`
  font-size: 25px;
  color: #2d2d2d;
  text-align: left;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const FocusText = styled.Text`
  font-size: 25px;
  color: ${theme.main};
  font-weight: bold;
  text-align: left;
  margin-bottom: 2px;
`;

export const TitleText = styled.Text`
  font-size: 22px;
  color: #303030;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const SubTitleText = styled.Text`
  margin-bottom: 15px;
  font-size: 13px;
  color: #878787;
`;

export const NumText = styled.Text`
  font-size: 16px;
  color: #0085ff;
  font-weight: bold;
  margin-left: 10px;
`;

export const NumtitleText = styled.Text`
  font-size: 16px;
  color: #303030;
  font-weight: bold;
  flex: 1;
  text-align: left;
  margin-left: 20px;
`;

export const NumnumText = styled.Text`
  font-size: 16px;
  color: #737373;
  flex: 1;
  text-align: right;
  margin-right: 30%;
`;

export const ImojiText = styled.Text`
  font-size: 24px;
  margin-right: 10px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f3f4f6;
`;

export const InnerContainer = styled.View`
  flex: 1;
  background-color: #f3f4f6;
`;

export const CriteriaButton = styled.TouchableOpacity`
  margin-top: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #e8f0fd;
  border-radius: 12px;
`;

export const CriteriaButtonText = styled.Text`
  color: #0085ff;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
`;

export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.View`
  width: 320px;
  height: 210px;
  padding: 25px;
  background-color: #e8f0fd;
  border-radius: 10px;
  align-items: self-start;
`;

export const ModalTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 15px;
  color: ${theme.main};
`;

export const ModalText = styled.Text`
  font-size: 14px;
  margin-bottom: 3px;
  font-weight: bold;
  color: #737373;
`;

export const CloseButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #0085ff;
  border-radius: 5px;
`;

export const CloseButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;
