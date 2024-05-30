import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import {
  RecordTextView,
  ReportText,
  DataeBtn,
  DataText,
  ReportBox,
  HappyText,
} from "../../../../styles/styles";
import {
  HomeText,
  SecondReportBox,
  NumText,
  NumtitleText,
  ImojiText,
  Header,
  BackButton,
  Placeholder,
} from "./DataScreen.style";
import SwitchSelector from "react-native-switch-selector";
import { useNavigation } from "@react-navigation/native";
import back from "../../../home/assets/images/back.png";

function DataScreen() {
  const navigation = useNavigation();

  return (
    <RecordTextView>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Image source={back} style={{ width: 24, height: 24 }} />
        </BackButton>
        <HomeText>전체 데이터</HomeText>
        <Placeholder />
      </Header>
      <SwitchSelector
        style={{ width: 320, marginTop: 20, marginBottom: 10 }}
        initial={0}
        //onPress={value => this.setState({ gender: value })}
        textColor={"#4E515A"}
        selectedColor={"#0085FF"}
        buttonColor={"#fff"}
        backgroundColor={"#E8F0FD"}
        borderColor={"#fff"}
        borderRadius={10}
        bold
        hasPadding
        height={40}
        valuePadding={4}
        options={[
          { label: "활동", value: "a" },
          { label: "위치", value: "y" },
          { label: "시간", value: "m" },
        ]}
      />
      <ScrollView>
        <SecondReportBox>
          <NumText>1</NumText>
          <NumtitleText>보드 타기</NumtitleText>
          <ImojiText>🛹</ImojiText>
        </SecondReportBox>

        <SecondReportBox>
          <NumText>2</NumText>
          <NumtitleText>보드 타기</NumtitleText>
          <ImojiText>🛹</ImojiText>
        </SecondReportBox>

        <SecondReportBox>
          <NumText>3</NumText>
          <NumtitleText>보드 타기</NumtitleText>
          <ImojiText>🛹</ImojiText>
        </SecondReportBox>
      </ScrollView>
    </RecordTextView>
  );
}

export default DataScreen;
