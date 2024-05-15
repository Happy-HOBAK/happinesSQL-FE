import * as Notifications from "expo-notifications";

export async function scheduleNotifications() {
  // 기존 모든 알림 취소
  await Notifications.cancelAllScheduledNotificationsAsync();

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Welcome!",
      body: "테스트입니다",
      sound: "default",
    },
    trigger: null, // 즉시 테스트 알림
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
