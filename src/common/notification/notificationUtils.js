import * as Notifications from "expo-notifications";
//import { sendPushNotification } from "expo-notifications";

// export async function sendNotification(expoPushToken) {
//   await sendPushNotification({
//     to: expoPushToken,
//     title: "Hello World!",
//     body: "This is a test notification.",
//     sound: "default",
//   });
// }

export async function scheduleNotifications() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Welcome!",
      body: "테스트입니댜",
      sound: "default",
    },
    trigger: null, // 테스트
  });

  const hours = [0, 9, 12, 14, 15, 18, 23];
  for (let hour of hours) {
    const trigger = {
      hour: hour,
      minute: 14,
      repeats: true,
    };

    const notificationContent = {
      title: "시간 테스트",
      body: "ㅠㅠ",
      sound: "default",
    };

    await Notifications.scheduleNotificationAsync({
      content: notificationContent,
      trigger: trigger,
    });
  }
}

export async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert("Must use physical device for Push Notifications");
  }

  // 서버에 토큰 저장 로직
}
