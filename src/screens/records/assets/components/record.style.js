import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const StyledRecordBox = styled.View`
  background-color: #fff;
  border-radius: 20px;
  width: 325px;
  /* padding: 15px; */
  margin-top: 25px;
  /* flex-direction: row; */
  /* align-items: center; */
  border-width: 1.5px;
  border-color: ${theme.grey_2};
`;

export const StyledRecordContent = styled.Text`
  font-size: 15px;
  font-weight: bold;
  text-align: left;
  margin-left: 5px;
  padding: 15px;
  color: #878787;
  margin-top: -10px;
`;

export const StyledRecordDate = styled.Text`
  /* margin-top: 8px; */
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  margin-left: 5px;
  margin-right: -5px;
  padding: 15px;
  color: #0b1623;
`;

export const StyledImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  margin: 25px;
  margin-left: 15px;
`;
