import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
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
`;

const getEmoji = (happiness) => {
  const emojis = ["😔", "😞", "😐", "😊", "😁", "😃"];
  return emojis[happiness] || "😐";
};

const ModalComponent = ({
  isVisible,
  onClose,
  date,
  happiness,
  memo,
  img_url,
}) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <ModalBackground>
          <View>
            <StyledModalRecordBox>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <StyledRecordDate>
                    {date}
                    {getEmoji(happiness)}
                  </StyledRecordDate>
                </View>
                <StyledRecordContent>{memo}</StyledRecordContent>
              </View>

              {img_url && <StyledImage source={{ uri: img_url }} />}

              <TouchableOpacity onPress={onClose}>
                {/* <CloseButton>닫기</CloseButton> */}
              </TouchableOpacity>
            </StyledModalRecordBox>
          </View>
        </ModalBackground>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalComponent;
