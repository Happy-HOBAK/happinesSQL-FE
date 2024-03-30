import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../../styles/theme.js';
import { ReportScreen, CalenderScreen, RecordsScreen, HomeScreen, TrendScreen } from './navigation.js';
import homeicon from '../../common/icons/home.png';
import recordicon from '../../common/icons/record.png';
import reporticon from '../../common/icons/report.png';
import trendicon from '../../common/icons/trend.png';
import calendericon from '../../common/icons/calender.png';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="홈"
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: theme.main,
      }}
    >
      <Tab.Screen 
        name="레포트 확인" 
        component={ReportScreen} 
        options={{
          tabBarIcon: () => (
            <Image source={reporticon} style={{ width: 24, height: 24 }}/>
          ),
        }}
      />
      <Tab.Screen 
        name="행복 달력" 
        component={CalenderScreen}
        options={{
          tabBarIcon: () => (
            <Image source={calendericon} style={{ width: 24, height: 24 }}/>
          ),
        }}
      />
      <Tab.Screen 
        name="홈" 
        component={HomeScreen} 
        options={{
          tabBarIcon: () => (
            <Image source={homeicon} style={{ width: 24, height: 24 }}/>
          ),
        }}
      />
      <Tab.Screen 
        name="행복 트렌드" 
        component={TrendScreen} 
        options={{
          tabBarIcon: () => (
            <Image source={trendicon} style={{ width: 24, height: 24 }}/>
          ),
        }}
      />
      <Tab.Screen 
        name="행복 톺아보기" 
        component={RecordsScreen} 
        options={{
          tabBarIcon: () => (
            <Image source={recordicon} style={{ width: 24, height: 24 }}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
