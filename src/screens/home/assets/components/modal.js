import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import { theme } from "../../../../styles/theme";
import { PlusBtn, PlusInput, PlusText } from "../../../../styles/styles";
import { sendActivity } from "../apis/activitySend";

const ModalScreen = ({ onClose }) => {
  const [activityName, setActivityName] = useState("");

  const handleActivityNameChange = (text) => {
    setActivityName(text);
  };

  const onPressModalClose = async () => {
    console.log("팝업을 닫는 중 입니다");
    console.log(activityName);
    await sendActivity(activityName);
    onClose();
  };

  const Close = async () => {
    onClose();
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <View style={{ alignSelf: "flex-end" }}>
          <TouchableOpacity onPress={Close}>
            <Text style={styles.modalTextStyle}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignSelf: "flex-start" }}>
          <Text style={styles.modalTextStyle}>활동 입력하기</Text>
        </View>
        <PlusInput
          onChangeText={handleActivityNameChange}
          value={activityName}
          placeholder="활동명 입력"
        />
        <PlusBtn onPress={onPressModalClose}>
          <PlusText>활동 추가하기</PlusText>
        </PlusBtn>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    height: 300,
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextStyle: {
    color: "#17191c",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 16,
  },
});

export default ModalScreen;
