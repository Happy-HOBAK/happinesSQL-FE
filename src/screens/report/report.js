import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  HomeText,
  ReportBox,
  HappyText,
  RecordTextView,
  ReportText,
  DataeBtn,
  DataText,
  SecondReportBox,
  FirstReportBox,
  ActivityReportBox,
  GraphReportBox,
  MapReportBox,
} from "../../styles/styles";
import SwitchSelector from "react-native-switch-selector";
import {
  FocusText,
  ImojiText,
  LeftText,
  NumText,
  NumtitleText,
  SubTitleText,
  TitleText,
  CriteriaButton,
  CriteriaButtonText,
  ModalBackground,
  ModalContainer,
  ModalTitle,
  ModalText,
  UserText,
} from "./report.style";
import { ReportAll } from "./all";
import { ReportMonth } from "./month";
import { ReportYear } from "./year";

function Report() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("a");
  const navigation = useNavigation();

  const handleDataBtnPress = (type) => {
    navigation.navigate("Data", { type });
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "a":
        return (
          <ReportAll
            handleDataBtnPress={() => handleDataBtnPress("all")}
            setModalVisible={setModalVisible}
          />
        );
      case "y":
        return (
          <ReportYear
            handleDataBtnPress={() => handleDataBtnPress("year")}
            setModalVisible={setModalVisible}
          />
        );
      case "m":
        return (
          <ReportMonth
            handleDataBtnPress={() => handleDataBtnPress("month")}
            setModalVisible={setModalVisible}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F3F4F6" }}>
      <RecordTextView style={{ backgroundColor: "#F3F4F6" }}>
        <HomeText>행복 리포트</HomeText>
        <SwitchSelector
          style={{ width: 320, marginTop: 20, marginBottom: 10 }}
          initial={0}
          onPress={(value) => setSelectedOption(value)}
          textColor={"#4E515A"}
          selectedColor={"#0085FF"}
          buttonColor={"#E8F0FD"}
          backgroundColor={"#fff"}
          borderColor={"#fff"}
          borderRadius={10}
          bold
          hasPadding
          height={40}
          valuePadding={4}
          options={[
            { label: "전체", value: "a" },
            { label: "연간", value: "y" },
            { label: "월간", value: "m" },
          ]}
        />
        {renderContent()}
      </RecordTextView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <ModalBackground>
            <TouchableOpacity
              activeOpacity={1}
              onPress={(e) => e.stopPropagation()}
            >
              <ModalContainer>
                <ModalTitle>행복지수 범위는 1부터 7까지예요</ModalTitle>
                <ModalText>매우 낮음 : 1 이상 2 미만</ModalText>
                <ModalText>낮음 : 2 이상 3 미만</ModalText>
                <ModalText>보통 : 3 이상 5 미만 </ModalText>
                <ModalText>높음 : 5 이상 6 미만 </ModalText>
                <ModalText>매우 높음 : 6 이상 7 미만 </ModalText>
              </ModalContainer>
            </TouchableOpacity>
          </ModalBackground>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

export default Report;
