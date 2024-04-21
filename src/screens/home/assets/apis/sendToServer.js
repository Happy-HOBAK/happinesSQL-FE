// export const sendToServer = async (emotion, activityId, memo, location, image, latitude, longitude, country) => {
//     try {
//       const response = await fetch('http://example.com/saveData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             happiness: emotion,
//             activityId: activityId,
//             full_name: location,
//             country: country,
//             city: location.split(' ')[0],
//             district: location.split(' ')[1],
//             x_pos: latitude,
//             y_pos: longitude,
//             memo: memo,
//             img: image,
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error('서버 응답이 실패했습니다.');
//       }
  
//       const data = await response.json();
//       return data; 
//     } catch (error) {
//       console.error('서버로 데이터 전송 중 오류 발생:', error);
//       throw error;
//     }
//   };

import axios from 'axios';

export const sendToServer = async (emotion, activityId, memo, location, image, latitude, longitude, country) => {
    try {
        const response = await axios.post('http://example.com/api/records', {
            happiness: emotion,
            activityId: activityId,
            full_name: location,
            country: country,
            city: location.split(' ')[0],
            district: location.split(' ')[1],
            x_pos: latitude,
            y_pos: longitude,
            memo: memo,
            img: image,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.data) {
            throw new Error('서버 응답이 실패했습니다.');
        }

        return response.data;
    } catch (error) {
        console.error('서버로 데이터 전송 중 오류 발생:', error);
        throw error;
    }
};

  