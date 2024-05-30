import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const HomeText = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: #484848;
  text-align: center;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  margin-left: 25px;
`;

export const Placeholder = styled.View`
  width: 24px;
  height: 24px;
  margin-right: 25px;
`;

export const SecondReportBox = styled.View`
  background-color: ${theme.grey_1};
  border-radius: 10px;
  width: 300px;
  height: 50px;
  margin-top: 15px;
  align-items: center;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  padding: 10px;
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

export const ImojiText = styled.Text`
  font-size: 24px;
  margin-right: 10px;
`;
