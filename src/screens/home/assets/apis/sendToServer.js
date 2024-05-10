import axios from 'axios';
import { PUBLIC_DNS } from '@env'; 

export const sendToServer = async (emotion, activityId, memo, location, image, latitude, longitude, country) => {
    try {
        const formData = new FormData();

        const content = {
            happiness: emotion,
            memo: memo,
            country: country,
            city: location.split(' ')[0],
            district: location.split(' ')[1],
            activity_id: activityId,
            full_name: location,
            x_pos: latitude,
            y_pos: longitude
        };

        formData.append('content', JSON.stringify(content));

        if (image) {
            formData.append('img', image, 'upload.jpg');
        }

        const apiUrl = `${PUBLIC_DNS}/api/records`;

        const response = await axios.post(apiUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error sending data to server:', error);
        throw error;
    }
};
