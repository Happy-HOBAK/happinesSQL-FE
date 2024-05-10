import axios from 'axios';
import { PUBLIC_DNS } from '@env';

export const getActivities = () => {
  const url = `${PUBLIC_DNS}/api/activities?userId=1`;
  console.log("Requesting URL:", url);
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      console.error("There was a problem with the axios operation:", error);
      throw error;
    });
};