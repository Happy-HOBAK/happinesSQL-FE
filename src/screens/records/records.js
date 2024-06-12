import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RecordData from "./assets/components/recordData";
import { HomeText, RecordBox } from "../../styles/styles";
import { StyledRecordText, RecordTextView } from "./records.style";

function Records() {
  return (
    <RecordTextView>
      <StyledRecordText>내 행복 톺아보기</StyledRecordText>
      <View style={{ marginTop: 10 }} />
      <RecordData />
    </RecordTextView>
  );
}

export default Records;
