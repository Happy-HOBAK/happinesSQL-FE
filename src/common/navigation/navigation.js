import React from 'react';
import { View, Text } from 'react-native';
import Home from '../../screens/home/home';

export function HomeScreen() {
  return (
    <Home/>
  );
}

export function CalenderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calender!</Text>
    </View>
  );
}
export function RecordsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Records!</Text>
      </View>
    );
  }
  export function ReportScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Report!</Text>
      </View>
    );
  }

export function TrendScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Trend!</Text>
    </View>
  );
}