import styled from "styled-components";
import { Dimensions } from "react-native";
import { theme } from "../../styles/theme";
import { LinearGradient } from "expo-linear-gradient";

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

export const SubText = styled.Text`
  font-size: 20px;
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

export const SubFocusText = styled.Text`
  font-size: 20px;
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

export const ReportBox = styled.View`
  background-color: white;
  border-radius: 10px;
  width: 330px;
  height: 200px;
  padding: 25px;
  margin-top: 25px;
  align-items: flex-start;
  justify-content: center;
`;

export const FirstReportBox = styled.View`
  background-color: white;
  border-radius: 10px;
  width: 330px;
  height: 250px;
  padding: 25px;
  margin-top: 25px;
  align-items: flex-start;
  justify-content: center;
`;

export const SecondReportBox = styled.View`
  background-color: ${theme.grey_1};
  border-radius: 10px;
  width: 270px;
  height: 50px;
  margin-top: 15px;
  align-items: center;
  flex-direction: row;
  /* align-self: center; */
  justify-content: space-between;
  padding: 10px;
`;

export const ActivityReportBox = styled.View`
  background-color: white;
  border-radius: 10px;
  width: 330px;
  height: 255px;
  padding: 25px;
  margin-top: 25px;
  align-items: flex-start;
  justify-content: center;
`;

export const ThirdReportBox = styled.View`
  background-color: white;
  border-radius: 10px;
  width: 330px;
  height: 320px;
  padding: 25px;
  margin-top: 25px;
  align-items: flex-start;
  justify-content: center;
`;

export const FourthReportBox = styled.View`
  background-color: white;
  border-radius: 10px;
  width: 330px;
  height: 780px;
  padding: 25px;
  margin-top: 25px;
  align-items: flex-start;
  justify-content: center;
`;

export const CircleContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

// export const BlueBox = styled.View`
//   background-color: #4facfe;
//   border-radius: 10px;
//   padding: 20px;
//   margin-top: 10px;
//   width: 280px;
//   height: 125px;
//   justify-content: center;
//   align-items: flex-start;
// `;

export const BlueBox = styled(LinearGradient).attrs({
  colors: ["#0085FF", "#6166E2"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;
  width: 280px;
  height: 125px;
  justify-content: center;
  align-items: flex-start;
`;

export const BlueBoxText = styled.Text`
  font-size: 15px;
  color: white;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${theme.main};
  height: 35px;
  width: 70px;
  border-radius: 5px;
  padding: 10px 20px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: 600;
`;

export const MapContainer = styled.View`
  width: 100%;
  height: 450px;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
`;
