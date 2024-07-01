import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import styled from "styled-components/native";
import { CalenderView } from "../../styles/styles";
import { Calendar } from "react-native-calendars";
import { theme } from "../../styles/theme";
import { getCalender, getDayDetails } from "./assets/apis/getCalender";
import { ColorContents } from "./assets/components/colorContents";
import ModalComponent from "./assets/components/calenderModal";

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
  const isFocused = useIsFocused();
  const [markedDates, setMarkedDates] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const navigation = useNavigation();

  const updateMarkedDates = (data) => {
    const newMarkedDates = { ...markedDates };
    data.forEach((item) => {
      newMarkedDates[item.date] = {
        customStyles: getCommonCustomStyles(item.happiness),
        happiness: item.happiness,
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

  const fetchDayData = async (date) => {
    try {
      const response = await getDayDetails(date);
      if (response.success) {
        setModalContent(response.data);
        setModalVisible(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      const today = new Date();
      const dateString = today.toISOString().split("T")[0];
      fetchMonthData(dateString);
    }
  }, [isFocused]);

  const handleMonthChange = (date) => {
    const { year, month } = date;
    fetchMonthData(`${year}-${month.toString().padStart(2, "0")}`);
  };

  const handleDayPress = (day) => {
    if (markedDates[day.dateString]) {
      fetchDayData(day.dateString);
    }
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
        onDayPress={handleDayPress}
        onMonthChange={handleMonthChange}
      />
      <ColorContents />
      <ModalComponent
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        data={modalContent}
      />
    </CalenderView>
  );
}

export default Calender;
