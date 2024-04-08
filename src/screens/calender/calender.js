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
      <CalendarList
        theme={{
          textDayFontWeight: "bold",
        }}
      />
    </View>
  );
}

export default Calender;

// const theme = {
//   calendarBackground: variables.main, // 캘린더 배경
//   monthTextColor: 'white',
//   textDayFontWeight: 'bold', // 날짜 서체
//   dayTextColor: 'white', // 캘린더 날짜 색상
//   textDayFontSize: 14, // 캘린더 날짜 글씨 크기
//   textSectionTitleColor: 'white', // 요일 날짜 글씨 크기
//   todayTextColor: 'yellow',
//   agendaDayTextColor: variables.text_3, // 날짜 글씨 색상
//   agendaDayNumColor: variables.text_4, // 요일 글씨 색상
//   agendaTodayColor: variables.main, // 당일 글씨 색상
//   agendaKnobColor: '#ffffff60', // Knob => 문고리 / 캘린더 접었다폈다 하는 아이콘 색상
//   indicatorColor: 'red',
//   selectedDayBackgroundColor: 'white',
//   selectedDayTextColor: variables.main,
//   'stylesheet.calendar.header': {
//     week: {marginTop: 0, flexDirection: 'row', justifyContent: 'space-between'},
//   },
// };

// import React from "react";
// import { View } from "react-native";
// import { CalendarList } from "react-native-calendars";
// import { useNavigation } from '@react-navigation/native';

// function Calendar() {
//   const navigation = useNavigation();

//   const theme1 = {
//     backgroundColor: "#f0f4f7",
//     calendarBackground: "#ffffff",
//     textSectionTitleColor: "#b6c1cd",
//     selectedDayBackgroundColor: "#00adf5",
//     selectedDayTextColor: "#ffffff",
//     todayTextColor: "#00adf5",
//     dayTextColor: "#2d4150",
//     textDisabledColor: "#d9e1e8",
//     dotColor: "#00adf5",
//     selectedDotColor: "#ffffff",
//     arrowColor: "orange",
//     monthTextColor: "blue",
//     textDayFontWeight: "bold",
//   };

//   const theme2 = {
//     backgroundColor: "#ffffff",
//     calendarBackground: "#f0f4f7",
//     textSectionTitleColor: "#000000",
//     selectedDayBackgroundColor: "#ff69b4",
//     selectedDayTextColor: "#ffffff",
//     todayTextColor: "#00adf5",
//     dayTextColor: "#2d4150",
//     textDisabledColor: "#d9e1e8",
//     dotColor: "#ff69b4",
//     selectedDotColor: "#ffffff",
//     arrowColor: "red",
//     monthTextColor: "green",
//     textDayFontWeight: "bold",
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ marginTop: 80 }} />
//       {/* Use theme1 */}
//       <CalendarList
//         theme={theme1}
//       />
//       {/* Use theme2 */}
//       <CalendarList
//         theme={theme2}
//       />
//     </View>
//   );
// }

// export default Calendar;
