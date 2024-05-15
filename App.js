import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { scheduleNotification } from "./src/common/notification/notificationUtils.js";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalStyle } from "./src/styles/Globalstyle.js";
import Home from "./src/screens/home/home.js";
import Test from "./src/screens/home/test.js";
import UserInfo from "./src/screens/home/userInfo.js";
import MyTabs from "./src/common/navigation/tabs.js";
import DataScreen from "./src/screens/report/assets/components/DataScreen.js";
import { RecoilRoot } from "recoil";
import * as Notifications from "expo-notifications";
import React, { useEffect } from "react";
import { scheduleNotifications } from "./src/common/notification/notificationUtils.js";
import { Login } from "./src/screens/Login/Login.js";
import { SignUp } from "./src/screens/SignUp/SignUp.js";
import { Landing } from "./src/screens/Landing/Landing.js";
import { FirstSignUp } from "./src/screens/SignUp/FirstSignUp..js";
import { SecondSignUp } from "./src/screens/SignUp/SecondSignUp.js";

const Stack = createNativeStackNavigator();

export default function App() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  useEffect(() => {
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("알람 설정이 거부되었습니다.");
      } else {
        await scheduleNotifications();
      }
    })();
  }, []);

  return (
    <RecoilRoot>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: "white",
            text: "#878787",
          },
        }}
        independent={true}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen
            name="FirstSignUp"
            component={FirstSignUp}
            options={{ title: "회원가입 - 1단계" }}
          />
          <Stack.Screen
            name="SecondSignUp"
            component={SecondSignUp}
            options={{ title: "회원가입 - 2단계" }}
          />
          <Stack.Screen name="Tabs" component={MyTabs} />
          <Stack.Screen name="UserInfo" component={UserInfo} />
        </Stack.Navigator>
        <StatusBar style="dark" />
      </NavigationContainer>
    </RecoilRoot>
  );
}
