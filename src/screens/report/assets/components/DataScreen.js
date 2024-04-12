import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RecordTextView, HomeText, ReportText, DataeBtn, DataText , ReportBox, HappyText } from '../../../../styles/styles';

function DataScreen() {
  return (
      <RecordTextView>
        <HomeText>
            내 행복점수 리포트
        </HomeText>
        <ReportText>
          내 행복점수를 World Database와 비교 분석한 내용이에요.
        </ReportText>

        <ScrollView>
        <ReportBox style={{height : 600, marginTop: 40}}>
          <HappyText style={{ marginTop: 250 }}>
             레포트를 준비중이에요!
          </HappyText>
        </ReportBox>
        </ScrollView>

    </RecordTextView>
  );
}

export default DataScreen;
