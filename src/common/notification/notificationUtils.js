import * as Notifications from "expo-notifications";

export async function scheduleNotifications() {
  // 기존 모든 알림 취소
  await Notifications.cancelAllScheduledNotificationsAsync();

  const hours = [9, 13, 19, 23];

  const morningMessages = [
    {
      title: "HappinesSQL",
      body: "🌞 새로운 아침, 당신이 느낀 행복을 기록해보세요!",
      sound: "default",
    },
    {
      title: "HappinesSQL",
      body: "☕ 좋은 아침! 행복의 시작을 기록해보세요!",
      sound: "default",
    },
    {
      title: "HappinesSQL",
      body: "🌷 오늘 아침, 당신을 미소 짓게 만든 순간은 무엇인가요? 공유해주세요!",
      sound: "default",
    },
  ];

  const noonMessages = [
    {
      title: "HappinesSQL",
      body: "🍴 점심시간, 행복했던 순간을 기록으로 남겨볼까요?",
      sound: "default",
    },
    {
      title: "HappinesSQL",
      body: "🌈 오늘 낮, 당신의 하루를 더욱 빛나게 만든 그 순간을 기록해보세요.",
      sound: "default",
    },
    {
      title: "HappinesSQL",
      body: "🍉 점심 후의 달콤함처럼 당신의 행복도 달콤했나요? 기록해봅시다.",
      sound: "default",
    },
  ];

  const afternoonMessages = [
    {
      title: "HappinesSQL",
      body: "🌇 저녁 노을처럼 아름다웠던 순간을 기록해보세요.",
      sound: "default",
    },
    {
      title: "🍽 저녁 식사",
      body: "🍽 저녁 식사와 함께, 행복한 순간을 되새겨보세요.",
      sound: "default",
    },
    {
      title: "HappinesSQL",
      body: "🌆 저녁 노을 아래, 당신을 웃게 만든 기억을 기록해보세요.",
      sound: "default",
    },
  ];

  const eveningMessages = [
    {
      title: "HappinesSQL",
      body: "🌆 하루의 마무리, 당신을 행복하게 만든 것은 무엇인가요?",
      sound: "default",
    },
    {
      title: "HappinesSQL",
      body: "🌜 잠자리에 들기 전, 당신이 느낀 행복을 기록해보세요.",
      sound: "default",
    },
    {
      title: "HappinesSQL",
      body: "🌠 밤하늘의 별빛 아래, 오늘 당신을 웃게 만든 기억을 기록해보세요.",
      sound: "default",
    },
  ];

  for (let hour of hours) {
    let notificationContent;

    if (hour === 9) {
      notificationContent =
        morningMessages[Math.floor(Math.random() * morningMessages.length)];
    } else if (hour === 13) {
      notificationContent =
        noonMessages[Math.floor(Math.random() * noonMessages.length)];
    } else if (hour === 19) {
      notificationContent =
        afternoonMessages[Math.floor(Math.random() * afternoonMessages.length)];
    } else if (hour === 23) {
      notificationContent =
        eveningMessages[Math.floor(Math.random() * eveningMessages.length)];
    }

    const trigger = {
      hour: hour,
      minute: 0,
      repeats: true,
    };

    await Notifications.scheduleNotificationAsync({
      content: notificationContent,
      trigger: trigger,
    });
  }
}
