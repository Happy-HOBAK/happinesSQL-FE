import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  CalenderView
} from "../../styles/styles";
import { Calendar, CalendarList } from "react-native-calendars";
import { theme } from "../../styles/theme";

function getCommonCustomStyles(opacity) {
  return {
    container: {
      backgroundColor: `rgba(0, 0, 255, ${opacity})`,
      borderRadius: 6,
      width: 35,
      height:35
    },
    text: {
      color: 'white'
    }
  };
}

const markedDates = {
  '2024-05-05': { customStyles: getCommonCustomStyles(0.2) },
  '2024-05-16': { customStyles: getCommonCustomStyles(0.5) },
  '2024-05-17': { customStyles: getCommonCustomStyles(0.7) },
};

const styles = {
  margin:10
};

const Calendertheme = {
todayTextColor: theme.main,
  textDayFontSize: 20,
  textDayFontWeight: '400',
  textMonthFontSize: 20,
  textMonthFontWeight: 'bold',
  textSectionTitleColor: 'rgba(138, 138, 138, 1)',
};

function Calender() {
  const navigation = useNavigation();

  return (
    <CalenderView>
      <Calendar
        style={styles}
        theme={Calendertheme}
        monthFormat={'yyyy년 M월'}
        markedDates={markedDates}
        markingType={'custom'}
        />
    </CalenderView>
  );
}

export default Calender;
// 스크롤 없는 버전

// import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import { CalendarList } from "react-native-calendars";
// import { CalenderView } from "../../styles/styles";
// import { theme } from "../../styles/theme";

// const styles = {
//   paddingBottom: 30,
//   borderColor: '#E9E9E9',
// };

// const Calendertheme = {
//   todayTextColor: theme.main,
//   textDayFontSize: 20,
//   textDayFontWeight: '400',
//   textMonthFontSize: 20,
//   textMonthFontWeight: '600',
//   textSectionTitleColor: 'rgba(138, 138, 138, 1)',
// };

// function Calender() {
//   const navigation = useNavigation();

//   return (
//     <CalenderView>
//       <CalendarList
//         style={styles}
//         theme={Calendertheme}
//         monthFormat={'yyyy년 M월'}
//         horizontal={true}
//         pagingEnabled={true}
//         pastScrollRange={12}
//         futureScrollRange={12}
//         scrollEnabled={true}
//       />
//     </CalenderView>
//   );
// }

// export default Calender;
