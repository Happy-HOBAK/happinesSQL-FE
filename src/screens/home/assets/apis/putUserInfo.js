import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PUBLIC_DNS } from "@env";

export const putUserInfo = async (gender, age) => {
  const url = `${PUBLIC_DNS}/api/users/profile`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰이 없습니다");
    }

    const response = await axios.put(
      url,
      { gender, age },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error updating user info:", error);
    throw error;
  }
};
