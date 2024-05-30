import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PUBLIC_DNS } from "@env";

export const sendActivity = async (activityName) => {
  const apiUrl = `${PUBLIC_DNS}/api/activities`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }

    const response = await axios.post(
      apiUrl,
      {
        activityName: activityName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("서버 응답:", response.data);
  } catch (error) {
    console.error("요청 실패:", error.response ? error.response.data : error);
    console.log("Activity Name:", activityName);
  }
};
