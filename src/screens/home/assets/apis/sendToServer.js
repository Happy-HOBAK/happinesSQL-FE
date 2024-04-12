export const sendToServer = async (emotion ,memo, location, image) => {
    try {
      const response = await fetch('http://example.com/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            emotion: emotion,
            memo: memo,
            location: location,
            image: image,
        }),
      });
  
      if (!response.ok) {
        throw new Error('서버 응답이 실패했습니다.');
      }
  
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('서버로 데이터 전송 중 오류 발생:', error);
      throw error;
    }
  };
  