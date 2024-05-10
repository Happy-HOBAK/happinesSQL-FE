import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, ReportBox, HappyText, RecordTextView, ReportText, DataeBtn, DataText, SecondReportBox } from "../../styles/styles";
import { ReportChart } from "./assets/components/reportGraph";

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
            <Text>점심에 한강에서 피크닉을 할 때 가장 행복했어요</Text>
            <DataeBtn onPress={handleDataBtnPress}>
            <DataText>
              전체 데이터 보기
            </DataText>
          </DataeBtn>
          </ReportBox>

          <Text style={{fontSize:12}}>
          데이터가 축적될수록 호박 님의 실제 데이터와 가까워져요!
          </Text>

          <Text>행복지수 위치</Text>
          <Text>호박 님은 이런 활동을 할 때 행복하군요!</Text>

          <SecondReportBox>
            <Text>1</Text>
            <Text>🛹</Text>
            <Text>보드 타기</Text>
            <Text>n번</Text>
          </SecondReportBox>

          <SecondReportBox>
            <Text>2</Text>
            <Text>🛹</Text>
            <Text>보드 타기</Text>
            <Text>n번</Text>
          </SecondReportBox>

          <SecondReportBox>
            <Text>3</Text>
            <Text>🛹</Text>
            <Text>보드 타기</Text>
            <Text>n번</Text>
          </SecondReportBox>

          <Text>행복 그래프</Text>
          <Text>호박 님의 행복 지수 추이를 분석해봤어요!</Text>

          <ReportBox>
              <View style={{marginRight:10}}>
              <ReportChart/>
              </View>
          </ReportBox>

          <Text>행복지수 위치</Text>
          <Text>호박 님은 이런 활동을 할 때 행복하군요!</Text>

          <SecondReportBox>
            <Text>1</Text>
            <Text>서울 동작구 상도동</Text>
            <Text>n번</Text>
          </SecondReportBox>

          <SecondReportBox>
            <Text>2</Text>
            <Text>서울 동작구 상도동</Text>
            <Text>n번</Text>
          </SecondReportBox>

          <SecondReportBox>
            <Text>3</Text>
            <Text>잠실나루역</Text>
            <Text>n번</Text>
          </SecondReportBox>

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