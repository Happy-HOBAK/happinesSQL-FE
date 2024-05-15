import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CalenderView } from "../../styles/styles";
import { Calendar } from "react-native-calendars";
import { theme } from "../../styles/theme";
import { getCalender } from "./assets/apis/getCalender";
import { ColorContents } from "./assets/components/colorContents";

const happinessColors = {
  0: "#98c9fb",
  1: "#98c9fb",
  2: "#76b6fa",
  3: "#54a4f8",
  4: "#0d7ef6",
  5: "#086bd3",
};

function getCommonCustomStyles(happiness) {
  const color = happinessColors[happiness];
  return {
    container: {
      backgroundColor: color,
      borderRadius: 6,
      width: 35,
      height: 35,
    },
    text: {
      color: "white",
    },
  };
}

const styles = {
  margin: 10,
};

const Calendertheme = {
  todayTextColor: theme.main,
  textDayFontSize: 20,
  textDayFontWeight: "400",
  textMonthFontSize: 20,
  textMonthFontWeight: "bold",
  textSectionTitleColor: "rgba(138, 138, 138, 1)",
};

function Calender() {
  const [markedDates, setMarkedDates] = useState({});
  const navigation = useNavigation();

  const updateMarkedDates = (data) => {
    const newMarkedDates = { ...markedDates };
    data.forEach((item) => {
      newMarkedDates[item.date] = {
        customStyles: getCommonCustomStyles(item.happiness),
      };
    });
    setMarkedDates(newMarkedDates);
  };

  const fetchMonthData = async (dateString) => {
    const [year, month] = dateString.split("-");
    try {
      const response = await getCalender(year, month);
      if (response.success) {
        updateMarkedDates(response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const today = new Date();
    const dateString = today.toISOString().split("T")[0];
    fetchMonthData(dateString);
  }, []);

  const handleMonthChange = (date) => {
    const { year, month } = date;
    fetchMonthData(`${year}-${month.toString().padStart(2, "0")}`);
  };

  return (
    <CalenderView>
      <View style={{ margin: 20 }} />
      <Calendar
        style={styles}
        theme={Calendertheme}
        monthFormat={"yyyy년 M월"}
        markedDates={markedDates}
        markingType={"custom"}
        onMonthChange={handleMonthChange}
      />
      <ColorContents />
    </CalenderView>
  );
}

export default Calender;
