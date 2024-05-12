import axios from "axios";
import { PUBLIC_DNS } from "@env";

export const getRecord = (lastRecordId) => {
  let url = `${PUBLIC_DNS}/api/records?size=8&userId=1`;
  if (lastRecordId) {
    url += `&lastRecordId=${lastRecordId}`; // lastRecordId를 URL에 추가?
  }
  console.log("Requesting URL:", url);
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was a problem with the axios operation:", error);
      throw error;
    });
};
