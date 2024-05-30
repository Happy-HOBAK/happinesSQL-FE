import styled from "styled-components";

const Rectangle = styled.View`
  width: 100px;
  height: 140px;
  border-radius: 10px;
  background-color: #e8f0fd;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const RectangleText = styled.Text`
  font-size: 14px;
  color: #2d2d2d;
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
`;

const RectangleEmoji = styled.Text`
  font-size: 40px;
`;

const RecordText = styled.Text`
  font-size: 12px;
  color: #0085ff;
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
  padding: 3px 10px;
  background-color: white;
  border-radius: 12px;
`;

const RectangleItem = ({ emoji, text, record }) => {
  return (
    <Rectangle>
      <RectangleEmoji>{emoji}</RectangleEmoji>
      <RectangleText>{text}</RectangleText>
      <RecordText>{record}</RecordText>
    </Rectangle>
  );
};

export default RectangleItem;
