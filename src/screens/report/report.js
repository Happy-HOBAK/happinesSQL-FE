import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, InfoBtn, InfoImage, RecordTextView, ReportText } from "../../styles/styles";

function Report() {
  const navigation = useNavigation();

  return (
    <View>
      <RecordTextView>
        <HomeText>
            내 행복점수 리포트
        </HomeText>
        <ReportText>
          내 행복점수를 World Database와 비교 분석한 내용이에요.
        </ReportText>
    </RecordTextView>
    </View>
  );
}

export default Report;
