import React from "react";
import { View, Text, ScrollView } from "react-native";
import {
  SecondReportBox,
  NumText,
  NumtitleText,
  ImojiText,
} from "./DataScreen.style";

export const Location = ({ data }) => {
  return (
    <ScrollView>
      {data && data.data ? (
        data.data.map((location, index) => (
          <SecondReportBox key={index}>
            <NumText>{location.ranking}</NumText>
            <NumtitleText>{location.location}</NumtitleText>
          </SecondReportBox>
        ))
      ) : (
        <Text>데이터가 없습니다.</Text>
      )}
    </ScrollView>
  );
};
