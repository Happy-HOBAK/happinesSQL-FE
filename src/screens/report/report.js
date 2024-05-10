import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, ReportBox, HappyText, RecordTextView, ReportText, DataeBtn, DataText, SecondReportBox } from "../../styles/styles";
import { ReportChart } from "./assets/components/reportGraph";
import SwitchSelector from "react-native-switch-selector";
import { ImojiText, NotiText, NumText, NumnumText, NumtitleText, SubTitleText, TitleText } from "./report.style";

function Report() {
  const navigation = useNavigation();

  const handleDataBtnPress = () => {
    navigation.navigate('Data');
  };

  return (
    <View>
      <RecordTextView>
        <HomeText>
            내 행복점수 리포트
        </HomeText>
        <ReportText>
          내 행복점수를 World Database와 비교 분석한 내용이에요.
        </ReportText>
  
        <ScrollView>
          <ReportBox>
            <Text>호박 님은</Text>
            <Text>점심에</Text>
            <Text>한강에서</Text>
            <Text>피크닉을 할 때</Text>
            <Text>가장 행복했어요</Text>
            <DataeBtn onPress={handleDataBtnPress}>
            <DataText>
              전체 데이터 보기
            </DataText>
          </DataeBtn>
          </ReportBox>

          <NotiText>
          데이터가 축적될수록 호박 님의 실제 데이터와 가까워져요!
          </NotiText>

          <TitleText>행복지수 위치</TitleText>
          <SubTitleText>호박 님은 이런 활동을 할 때 행복하군요!</SubTitleText>

          <SecondReportBox>
            <NumText>1</NumText>
            <ImojiText>🛹</ImojiText>
            <NumtitleText>보드 타기</NumtitleText>
            <NumnumText>n번</NumnumText>
          </SecondReportBox>

          <SecondReportBox>
            <NumText>2</NumText>
            <ImojiText>🛹</ImojiText>
            <NumtitleText>보드 타기</NumtitleText>
            <NumnumText>n번</NumnumText>
          </SecondReportBox>

          <SecondReportBox>
            <NumText>3</NumText>
            <ImojiText>🛹</ImojiText>
            <NumtitleText>보드 타기</NumtitleText>
            <NumnumText>n번</NumnumText>
          </SecondReportBox>

          <TitleText>행복 그래프</TitleText>
          <SubTitleText>호박 님의 행복 지수 추이를 분석해봤어요!</SubTitleText>

          <ReportBox>
            <SwitchSelector
              style={{width:200, marginTop:10, marginBottom:10}}
              initial={0}
              //onPress={value => this.setState({ gender: value })}
              textColor={"#4E515A"}
              selectedColor={"#0085FF"}
              buttonColor={"#fff"}
              backgroundColor={"#E8F0FD"}
              borderColor={"#E8F0FD"}
              borderRadius={10}
              bold
              hasPadding
              height={30}
              valuePadding={4}
              options={[
                { label: "주간", value: "f" },
                { label: "월간", value: "m" }
              ]}
            />
              <View style={{marginRight:10}}>
              <ReportChart/>
              </View>
          </ReportBox>

          <TitleText>행복지수 위치</TitleText>
          <SubTitleText>호박 님은 이런 활동을 할 때 행복하군요!</SubTitleText>

          <SecondReportBox>
            <NumText>1</NumText>
            <NumtitleText>서울 동작구 상도동</NumtitleText>
            <NumnumText>n번</NumnumText>
          </SecondReportBox>

          <SecondReportBox>
            <NumText>2</NumText>
            <NumtitleText>서울 동작구 상도동</NumtitleText>
            <NumnumText>n번</NumnumText>
          </SecondReportBox>

          <SecondReportBox>
            <NumText>3</NumText>
            <NumtitleText>잠실나루역</NumtitleText>
            <NumnumText>n번</NumnumText>
          </SecondReportBox>
          <View style={{height:100}}/>
        </ScrollView>

    </RecordTextView>
    </View>
  );
}

export default Report;

const styles = StyleSheet.create({
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    }
})