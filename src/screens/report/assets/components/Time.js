import React from "react";
import { View, Text, ScrollView } from "react-native";
import {
  SecondReportBox,
  NumText,
  NumtitleText,
  ImojiText,
} from "./DataScreen.style";

export const Time = ({ data }) => {
  return (
    <ScrollView>
      {data && data.data ? (
        data.data.map((time, index) => (
          <SecondReportBox key={index}>
            <NumText>{time.ranking}</NumText>
            <NumtitleText>{time.time_of_day}</NumtitleText>
          </SecondReportBox>
        ))
      ) : (
        <Text>데이터가 없습니다.</Text>
      )}
    </ScrollView>
  );
};
