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
import { ReportChart } from "./assets/components/reportGraph";
import SwitchSelector from "react-native-switch-selector";
import {
  FocusText,
  ImojiText,
  LeftText,
  NotiText,
  NumText,
  NumnumText,
  NumtitleText,
  SubTitleText,
  TitleText,
  Container,
  InnerContainer,
  CriteriaButton,
  CriteriaButtonText,
  ModalBackground,
  ModalContainer,
  ModalTitle,
  ModalText,
  CloseButton,
  CloseButtonText,
  UserText,
} from "./report.style";

function Report() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleDataBtnPress = () => {
    navigation.navigate("Data");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F3F4F6" }}>
      <RecordTextView style={{ backgroundColor: "#F3F4F6" }}>
        <HomeText>행복 리포트</HomeText>
        <SwitchSelector
          style={{ width: 320, marginTop: 20, marginBottom: 10 }}
          initial={0}
          //onPress={value => this.setState({ gender: value })}
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
        <ScrollView>
          <ReportBox>
            <UserText>호박 님의</UserText>
            <LeftText>평균 행복지수는</LeftText>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FocusText>보통</FocusText>
              <LeftText>이에요</LeftText>
              <FocusText> 🙂</FocusText>
            </View>
            <CriteriaButton onPress={() => setModalVisible(true)}>
              <CriteriaButtonText>기준이 궁금해요!</CriteriaButtonText>
            </CriteriaButton>
          </ReportBox>

          <FirstReportBox>
            <UserText>호박 님은</UserText>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FocusText>점심</FocusText>
              <LeftText>에</LeftText>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FocusText>한강</FocusText>
              <LeftText>에서</LeftText>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FocusText>피크닉</FocusText>
              <LeftText>을 할 때</LeftText>
            </View>
            <LeftText>가장 행복했어요</LeftText>
            <DataeBtn onPress={handleDataBtnPress}>
              <DataText>전체 데이터 보기</DataText>
            </DataeBtn>
          </FirstReportBox>

          <ActivityReportBox>
            <TitleText>행복한 활동 BEST 3</TitleText>
            <SubTitleText>호박 님은 이런 활동을 할 때 행복하군요!</SubTitleText>

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
              {/* <NumText>3</NumText>
              <NumtitleText>보드 타기</NumtitleText>
              <ImojiText>🛹</ImojiText> */}
            </SecondReportBox>
          </ActivityReportBox>

          <GraphReportBox>
            <TitleText>행복 그래프</TitleText>
            <SubTitleText>
              호박 님의 행복 지수 추이를 분석해봤어요!
            </SubTitleText>
            <ReportChart />
          </GraphReportBox>

          <MapReportBox>
            <TitleText>행복했던 장소 BEST 3</TitleText>
            <SubTitleText>호박 님은 이런 장소에서 행복했어요</SubTitleText>

            <SecondReportBox>
              <NumText>1</NumText>
              <NumtitleText>서울 동작구 상도동</NumtitleText>
            </SecondReportBox>

            <SecondReportBox>
              <NumText>2</NumText>
              <NumtitleText>서울 동작구 상도동</NumtitleText>
            </SecondReportBox>

            <SecondReportBox>
              <NumText>3</NumText>
              <NumtitleText>잠실나루역</NumtitleText>
            </SecondReportBox>
          </MapReportBox>
          <View style={{ height: 200 }} />
        </ScrollView>
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
                <ModalText>매우 낮음 : 0 이상 2 미만</ModalText>
                <ModalText>낮음 : 3 이상 4 미만</ModalText>
                <ModalText>보통 : 4 이상 5 미만</ModalText>
                <ModalText>높음 : 5 이상 6 미만</ModalText>
                <ModalText>매우 높음 : 6 이상 7 미만</ModalText>
              </ModalContainer>
            </TouchableOpacity>
          </ModalBackground>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

export default Report;
