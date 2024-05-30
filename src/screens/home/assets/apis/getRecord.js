import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PUBLIC_DNS } from "@env";

export const getRecord = async (lastRecordId) => {
  let url = `${PUBLIC_DNS}/api/records?size=8`;
  if (lastRecordId) {
    url += `&lastRecordId=${lastRecordId}`;
  }
  console.log("Requesting URL:", url);

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("There was a problem with the axios operation:", error);
    throw error;
  }
};
