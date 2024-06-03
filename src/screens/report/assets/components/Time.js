import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import {
  SecondReportBox,
  NumText,
  NumtitleText,
  ImojiText,
} from "./DataScreen.style";

export const Time = () => {
  return (
    <ScrollView>
      <SecondReportBox>
        <NumText>1</NumText>
        <NumtitleText>시간</NumtitleText>
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
    </ScrollView>
  );
};
