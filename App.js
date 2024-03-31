import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home/home.js';
import Test from './src/screens/home/test.js';
import UserInfo from './src/screens/home/userInfo.js';
import MyTabs from './src/common/navigation/tabs.js';
import { RecoilRoot } from 'recoil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={MyTabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
    </RecoilRoot>
  );
}