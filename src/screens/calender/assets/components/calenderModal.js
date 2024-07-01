import React from "react";
import { View, TouchableOpacity, Modal, ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import {
  StyledImage,
  StyledRecordBox,
  StyledRecordContent,
  StyledRecordDate,
} from "../../../records/assets/components/record.style";

const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModalRecordBox = styled(StyledRecordBox)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const CloseButton = styled(TouchableOpacity)`
  margin-top: 20px;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
`;

const CloseButtonText = styled(Text)`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

const getEmoji = (happiness) => {
  const emojis = ["😔", "😞", "😐", "😊", "😁", "😃"];
  return emojis[happiness] || "😐";
};

const ModalComponent = ({ isVisible, onClose, data }) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <ModalBackground>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            padding: 20,
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          {data.map((item, index) => (
            <StyledModalRecordBox key={index}>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <StyledRecordDate>
                    {item.date}
                    {getEmoji(item.happiness)}
                  </StyledRecordDate>
                </View>
                <StyledRecordContent>{item.memo}</StyledRecordContent>
              </View>
              {item.img_url && <StyledImage source={{ uri: item.img_url }} />}
            </StyledModalRecordBox>
          ))}
          <CloseButton onPress={onClose}>
            <CloseButtonText>닫기</CloseButtonText>
          </CloseButton>
        </ScrollView>
      </ModalBackground>
    </Modal>
  );
};

export default ModalComponent;
