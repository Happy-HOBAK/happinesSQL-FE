import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  RecordTextView,
  HomeText,
  ReportText,
  DataeBtn,
  DataText,
  ReportBox,
  HappyText,
} from "../../../../styles/styles";

function DataScreen() {
  return (
    <RecordTextView>
      <HomeText>내 행복점수 리포트</HomeText>
      <ReportText>
        내 행복점수를 World Database와 비교 분석한 내용이에요.
      </ReportText>

      <ScrollView>
        <ReportBox style={{ height: 600, marginTop: 40 }}>
          {/* <HappyText style={{ marginTop: 250 }}>
             레포트를 준비중이에요!
          </HappyText> */}
          <View style={StyleSheet.absoluteFillObject}>
            <MapView
              style={{ flex: 1, height: 400 }}
              provider={"google"}
              initialRegion={{
                latitude: 37.5005,
                longitude: 126.9375,
                latitudeDelta: 0.005,
                longitudeDelta: 0.002,
              }}
            >
              <Marker
                coordinate={{ latitude: 37.5005, longitude: 126.9375 }}
                title={"상도동"}
                description={"여기는 서울시 동작구 상도동입니다."}
              />
            </MapView>
          </View>
        </ReportBox>
      </ScrollView>
    </RecordTextView>
  );
}

export default DataScreen;
