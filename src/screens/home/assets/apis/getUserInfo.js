import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PUBLIC_DNS } from "@env";

export const getUserInfo = async () => {
  const url = `${PUBLIC_DNS}/api/users/profile`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};
