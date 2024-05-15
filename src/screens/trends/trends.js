import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeText, RecordTextView } from "../../styles/styles";
import { getActivities } from "../home/assets/apis/getActivity";

function Trends() {
  // useEffect(() => {
  //   getActivities()
  //     .then(data => {
  //       console.log("Activities data:", data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching activities:", error);
  //       Alert.alert("Error", `Failed to load data: ${error.message}`);
  //     });
  // }, []);

  return (
    <View>
      <RecordTextView>
        <HomeText>행복 트렌드</HomeText>
      </RecordTextView>
    </View>
  );
}

export default Trends;
