import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, InfoBtn, InfoImage, HomeTextView } from "../../styles/styles";
import { Calendar, CalendarList } from "react-native-calendars";
import { theme } from "../../styles/theme";

function Calender() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1 }}>
      <View style={{marginTop: 80}}/>
      <CalendarList></CalendarList>
    </View>
  );
}

export default Calender;


{/* <Calendar 
pastScrollRange={50}
futureScrollRange={50}
scrollEnabled={true}
showScrollIndicator={true}
horizontal={horizontalView}

/> */}