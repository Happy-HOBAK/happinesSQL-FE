import axios from "axios";
import { PUBLIC_DNS } from "@env";

export const getSearch = async (searchQuery) => {
  const url = `${PUBLIC_DNS}/api/activities/search?userId=1`;
  try {
    console.log(searchQuery);
    const response = await axios.post(url, { search: searchQuery });
    return response;
  } catch (error) {
    console.error("There was a problem with the axios post operation:", error);
    throw error;
  }
};
