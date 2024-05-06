import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
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
          <DataeBtn onPress={handleDataBtnPress}>
            <DataText>
              전체 데이터 보기
            </DataText>
          </DataeBtn>
        </ReportBox>

        <SecondReportBox>
          <HappyText style={{ marginTop: 24 }}>
            행복 Best 3
          </HappyText>
          <HappyText style={{ marginTop: 10 }}>
            1. 보드타기🛹
          </HappyText>
          <HappyText style={{marginTop : 6 }}>
            2. 요리하기🍳
          </HappyText>
          <HappyText style={{marginTop : 6 }}>
            3. 코딩하기🧑‍💻
          </HappyText>
        </SecondReportBox>

        <ReportBox style={{height : 430}}>
          <HappyText style={{ marginTop: 24, marginBottom: 20 }}>
             행복 지수 그래프
          </HappyText>
          <View style={{marginRight:10}}>
          <ReportChart/>
          </View>
        </ReportBox>

        <ReportBox style={{height : 380}}>
          <HappyText style={{ marginTop: 24 }}>
             행복 지수 위치
          </HappyText>
        </ReportBox>
        </ScrollView>

    </RecordTextView>
    </View>
  );
}

export default Report;
