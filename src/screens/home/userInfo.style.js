import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const ImageBtn = styled.TouchableOpacity`
  background-color: #007bff;
  border-radius: 5px;
  margin-top: 10px;
`;

export const ImageBtnText = styled.Text`
  color: #fff;
  font-weight: 500;
`;

export const DeleteBtn = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const DeleteBtnText = styled.Text`
  color: #dc3545;
  font-weight: 500;
`;

export const Label = styled.Text`
  align-self: flex-start;
  margin-left: 40px;
  margin-top: 20px;
  font-weight: 500;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  border-color: #ced4da;
  border-width: 1px;
  border-radius: 5px;
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
