import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const EmojiText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 5px;
`;

export const ActivityText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
`;

export const DescriptionText = styled.Text`
  font-size: 9px;
  font-weight: bold;
  text-align: left;
  color: #909090;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ActivityBtn = styled.TouchableOpacity`
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
  width: 100px;
  height: 100px;
  background-color: ${(props) => theme.grey_2};
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
