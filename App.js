import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GlobalStyle } from './src/styles/Globalstyle.js';
import Home from './src/screens/home/home.js';
import Test from './src/screens/home/test.js';
import UserInfo from './src/screens/home/userInfo.js';
import MyTabs from './src/common/navigation/tabs.js';
import DataScreen from './src/screens/report/assets/components/DataScreen.js';
import { RecoilRoot } from 'recoil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
    <NavigationContainer theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white',
          text: '#878787'
        },
      }}
      independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={MyTabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Data" component={DataScreen} />
      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
    </RecoilRoot>
  );
}