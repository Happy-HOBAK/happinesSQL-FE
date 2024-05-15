import axios from "axios";
import { PUBLIC_DNS } from "@env";

export const postUserInfo = async (username, password, name, gender, age) => {
  const apiUrl = `${PUBLIC_DNS}/api/users/sign-up`;
  try {
    const response = await axios.post(
      apiUrl,
      {
        username: username,
        password: password,
        name: name,
        gender: gender,
        age: age,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("서버 응답:", response.data);
  } catch (error) {
    console.error("요청 실패:", error.response ? error.response.data : error);
  }
};
