import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import RecordData from "./assets/components/recordData";
import { HomeText, RecordTextView } from "../../styles/styles";

function Records() {

  return (
    <View>
    <RecordTextView>
        <HomeText>
            행복 톺아보기
        </HomeText>
    </RecordTextView>
    <RecordData/>
    </View>
  );
}


export default Records;
