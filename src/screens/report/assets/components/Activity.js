import React from "react";
import { ScrollView, Text } from "react-native";
import {
  SecondReportBox,
  NumText,
  NumtitleText,
  ImojiText,
} from "./DataScreen.style";

export const Activity = ({ data }) => {
  return (
    <ScrollView>
      {data && data.data ? (
        data.data.map((activity, index) => (
          <SecondReportBox key={index}>
            <NumText>{activity.ranking}</NumText>
            <NumtitleText>{activity.activity}</NumtitleText>
            <ImojiText>{activity.emoji}</ImojiText>
          </SecondReportBox>
        ))
      ) : (
        <Text>데이터가 없습니다.</Text>
      )}
    </ScrollView>
  );
};
