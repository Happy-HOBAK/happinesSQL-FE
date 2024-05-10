import axios from 'axios';
import { PUBLIC_DNS } from '@env';

export const sendActivity = async (activityName) => {
    const apiUrl = `${PUBLIC_DNS}/api/activities?userId=1`; // userId is fixed to 1
    try {
        const response = await axios.post(apiUrl, {
            category: "기타", // Category is fixed to "기타"
            activityName: activityName 
        });

        console.log('서버 응답:', response.data); // Logs server response
    } catch (error) {
        console.error('요청 실패:', error.response ? error.response.data : error);
        console.log('Activity Name:', activityName); // Only log the activityName for debugging
    }
};
