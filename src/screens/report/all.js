import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import {
  ReportBox,
  DataeBtn,
  DataText,
  SecondReportBox,
  FirstReportBox,
  ActivityReportBox,
  GraphReportBox,
  MapReportBox,
} from "../../styles/styles";
import { ReportChart } from "./assets/components/reportGraph";
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
  UserText,
} from "./report.style";

export const ReportAll = ({ handleDataBtnPress, setModalVisible }) => {
  return (
    <ScrollView>
      <ReportBox>
        <UserText>1 님의</UserText>
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
          <NumText>3</NumText>
          <NumtitleText>보드 타기</NumtitleText>
          <ImojiText>🛹</ImojiText>
        </SecondReportBox>
      </ActivityReportBox>

      <GraphReportBox>
        <TitleText>행복 그래프</TitleText>
        <SubTitleText>호박 님의 행복 지수 추이를 분석해봤어요!</SubTitleText>
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
  );
};
