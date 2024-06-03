import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import styled from "styled-components/native";

const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.View`
  width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

const CloseButton = styled.Text`
  color: blue;
  margin-top: 20px;
  text-align: center;
`;

const ModalComponent = ({ isVisible, onClose, date, happiness, memo }) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <ModalBackground>
        <ModalContainer>
          <Text>Date: {date}</Text>
          <Text>Happiness: {happiness}</Text>
          <Text>Memo: {memo}</Text>
          <TouchableOpacity onPress={onClose}>
            <CloseButton>Close</CloseButton>
          </TouchableOpacity>
        </ModalContainer>
      </ModalBackground>
    </Modal>
  );
};

export default ModalComponent;
