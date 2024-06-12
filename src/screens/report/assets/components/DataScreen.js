import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator, Image } from "react-native";
import {
  RecordTextView,
  ReportText,
  DataeBtn,
  DataText,
  ReportBox,
  HappyText,
} from "../../../../styles/styles";
import {
  HomeText,
  SecondReportBox,
  NumText,
  NumtitleText,
  ImojiText,
  Header,
  BackButton,
  Placeholder,
} from "./DataScreen.style";
import SwitchSelector from "react-native-switch-selector";
import { useNavigation, useRoute } from "@react-navigation/native";
import back from "../../../home/assets/images/back.png";
import { Activity } from "./Activity";
import { Location } from "./Location";
import { Time } from "./Time";
import {
  getAllRankingActivity,
  getAllRankingLocation,
  getAllRankingTime,
  getMonthRankingActivity,
  getMonthRankingLocation,
  getMonthRankingTime,
  getYearRankingActivity,
  getYearRankingLocation,
  getYearRankingTime,
} from "../apis/getRankings";

function DataScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedOption, setSelectedOption] = useState("a");
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState(null);
  const [locations, setLocations] = useState(null);
  const [times, setTimes] = useState(null);

  const { type } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let activityData, locationData, timeData;

        switch (type) {
          case "all":
            activityData = await getAllRankingActivity();
            locationData = await getAllRankingLocation();
            timeData = await getAllRankingTime();
            break;
          case "month":
            activityData = await getMonthRankingActivity();
            locationData = await getMonthRankingLocation();
            timeData = await getMonthRankingTime();
            break;
          case "year":
            activityData = await getYearRankingActivity();
            locationData = await getYearRankingLocation();
            timeData = await getYearRankingTime();
            break;
          default:
            break;
        }

        setActivities(activityData);
        setLocations(locationData);
        setTimes(timeData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    switch (selectedOption) {
      case "a":
        return <Activity data={activities} />;
      case "y":
        return <Location data={locations} />;
      case "m":
        return <Time data={times} />;
      default:
        return null;
    }
  };

  return (
    <RecordTextView>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Image source={back} style={{ width: 24, height: 24 }} />
        </BackButton>
        <HomeText>전체 데이터</HomeText>
        <Placeholder />
      </Header>
      <SwitchSelector
        style={{ width: 320, marginTop: 20, marginBottom: 10 }}
        initial={0}
        onPress={(value) => setSelectedOption(value)}
        textColor={"#4E515A"}
        selectedColor={"#0085FF"}
        buttonColor={"#fff"}
        backgroundColor={"#E8F0FD"}
        borderColor={"#fff"}
        borderRadius={10}
        bold
        hasPadding
        height={40}
        valuePadding={4}
        options={[
          { label: "활동", value: "a" },
          { label: "위치", value: "y" },
          { label: "시간", value: "m" },
        ]}
      />
      {renderContent()}
    </RecordTextView>
  );
}

export default DataScreen;
