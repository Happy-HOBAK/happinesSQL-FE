import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { ReportScreen, CalenderScreen, RecordsScreen, HomeScreen, TrendScreen } from './src/common/navigation.js';
import homeicon from './src/common/icons/home.png';
import recordicon from './src/common/icons/record.png';
import reporticon from './src/common/icons/report.png';
import trendicon from './src/common/icons/trend.png';
import calendericon from './src/common/icons/calender.png';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="레포트 확인" component={ReportScreen} 
      options={{tabBarIcon: ({ color, size }) => (
            <Image source={reporticon} style={{ width: 24, height: 24 }}/>
          ),}}/>
      <Tab.Screen name="행복 달력" component={CalenderScreen}
      options={{tabBarIcon: ({ color, size }) => (
        <Image source={calendericon} style={{ width: 24, height: 24 }}/>
        ),}} />
      <Tab.Screen name="홈" component={HomeScreen} 
      options={{tabBarIcon: ({ color, size }) => (
        <Image source={homeicon} style={{ width: 24, height: 24 }}/>
        ),}}/>
      <Tab.Screen name="행복 트렌드" component={TrendScreen} 
      options={{tabBarIcon: ({ color, size }) => (
        <Image source={trendicon} style={{ width: 24, height: 24 }}/>
        ),}}/>
      <Tab.Screen name="행복 톺아보기" component={RecordsScreen} 
      options={{tabBarIcon: ({ color, size }) => (
        <Image source={recordicon} style={{ width: 24, height: 24 }}/>
        ),}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    
  );
}

{/* <NavigationContainer>
      <Stack.Navigator  screenOptions = {{ headerShown: false }} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer> */}