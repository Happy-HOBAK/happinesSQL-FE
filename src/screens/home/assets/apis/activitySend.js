import axios from 'axios';

export const ActivitySend = async (selectedValue, activityName) => {
    try {
        const response = await axios.post('api/activities', {
            categoryId: selectedValue,
            activity_name: activityName 
        });

        console.log('서버 응답:', response.data);
    } catch (error) {
        console.error('요청 실패:', error);
        console.log(selectedValue)
        console.log(activityName)
    }
};
