import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/home/home.js';
import Test from './src/screens/home/test.js';
//import { HomeScreen, RecordsScreen, ReportScreen, CalenderScreen, TrendScreen } from './src/common/bottomnavigation';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

 function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

 function CalenderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calender!</Text>
    </View>
  );
}
 function RecordsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Records!</Text>
      </View>
    );
  }
 function ReportScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Report!</Text>
      </View>
    );
  }

 function TrendScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Trend!</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="레포트 확인" component={ReportScreen} />
      <Tab.Screen name="행복 달력" component={CalenderScreen} />
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="행복 트렌드" component={TrendScreen} />
      <Tab.Screen name="행복 톺아보기" component={RecordsScreen} />
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