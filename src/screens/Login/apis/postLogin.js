import axios from "axios";
import { PUBLIC_DNS } from "@env";

export const postLogin = async (username, password) => {
  const apiUrl = `${PUBLIC_DNS}/api/users/login`;
  try {
    const response = await axios.post(
      apiUrl,
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("서버 응답:", response.data);
    return response.data;
  } catch (error) {
    console.error("요청 실패:", error.response ? error.response.data : error);
    throw error;
  }
};
