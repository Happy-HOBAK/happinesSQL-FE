import { View } from "react-native";
import styled from "styled-components";

const Circle = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #f3f4f6;
  align-items: center;
  justify-content: center;
`;

const CircleText = styled.Text`
  font-size: 14px;
  color: #2d2d2d;
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
`;

const CircleEmoji = styled.Text`
  font-size: 30px;
`;

const CircleItem = ({ emoji, text }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Circle>
        <CircleEmoji>{emoji}</CircleEmoji>
      </Circle>
      <CircleText>{text}</CircleText>
    </View>
  );
};

export default CircleItem;
