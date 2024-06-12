import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const ErrorMessage = styled.Text`
  text-align: center;
  margin-bottom: 10px;
  color: red;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
  align-items: left;
  margin-top: 10px;
`;

export const ImageWrapper = styled.View`
  position: relative;
  width: 80px;
  height: 80px;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const RemoveButton = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 5px;
`;

export const RemoveButtonText = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const StyledThirdPicInput = styled.View`
  flex-direction: row;
  align-items: center;
`;
