import React from "react";
import { View, Text } from "react-native";
import Home from "../../screens/home/home";
import Records from "../../screens/records/records";
import Calender from "../../screens/calender/calender";
import Report from "../../screens/report/report";
import Trends from "../../screens/trends/trends";
import Data from "../../screens/report/assets/components/DataScreen";

export function HomeScreen() {
  return <Home />;
}

export function CalenderScreen() {
  return <Calender />;
}
export function RecordsScreen() {
  return <Records />;
}
export function ReportScreen() {
  return <Report />;
}

export function TrendScreen() {
  return <Trends />;
}

export function DataScreen() {
  return <Data />;
}
