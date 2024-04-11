import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import RecordData from "./assets/components/recordData";
import { HomeText, RecordTextView, RecordBox } from "../../styles/styles";

function Records() {

  return (
    <RecordTextView>
        <HomeText>
            내 행복 톺아보기
        </HomeText>
         <View style={{marginTop: 10}}/>
        <RecordData/>
    </RecordTextView>
      );
}


export default Records;
