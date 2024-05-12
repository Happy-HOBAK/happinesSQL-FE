import axios from "axios";
import { PUBLIC_DNS } from "@env";

export const sendActivity = async (activityName) => {
  const apiUrl = `${PUBLIC_DNS}/api/activities?userId=1`;
  try {
    const response = await axios.post(apiUrl, {
      activityName: activityName,
    });

    console.log("서버 응답:", response.data);
  } catch (error) {
    console.error("요청 실패:", error.response ? error.response.data : error);
    console.log("Activity Name:", activityName);
  }
};
