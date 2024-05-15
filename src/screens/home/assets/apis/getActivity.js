import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PUBLIC_DNS } from "@env";

export const getActivities = async () => {
  const url = `${PUBLIC_DNS}/api/activities?userId=1`;
  console.log("Requesting URL:", url);

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰잉 ㅓㅂㅇ서요");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("axios operation:", error);
    throw error;
  }
};
