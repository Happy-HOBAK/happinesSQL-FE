import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PUBLIC_DNS } from "@env";

export const getSearch = async (searchQuery) => {
  const url = `${PUBLIC_DNS}/api/activities/search`;
  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("노토큰");
    }

    console.log(searchQuery);

    const response = await axios.post(
      url,
      { search: searchQuery },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was a problem with the axios post operation:", error);
    throw error;
  }
};
