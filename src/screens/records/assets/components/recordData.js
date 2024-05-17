// import React, { useState, useEffect } from "react";
// import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { data } from "../../../../common/data/data";
// import { RecordBox, RecordContent, RecordDate } from "../../../../styles/styles";

// function RecordData() {
//   const navigation = useNavigation();
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const [records, setRecords] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, [page]);

//   const fetchData = () => {
//     setLoading(true);
//     const startIndex = (page - 1) * 9;
//     const endIndex = startIndex + 9;
//     const newRecords = data.documents.records.slice(startIndex, endIndex);
//     setRecords(prevRecords => [...prevRecords, ...newRecords]);
//     setLoading(false);
//   };

//   const handleScroll = ({ nativeEvent }) => {
//     const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
//     const isEndOfList = layoutMeasurement.height + contentOffset.y >= contentSize.height;
//     if (isEndOfList && !loading) {
//       setPage(prevPage => prevPage + 1);
//     }
//   };

//   return (
//     <ScrollView onScroll={handleScroll} scrollEventThrottle={400}>
//       {records.map((record, index) => (
//         <RecordBox key={index}>
//         <View>
//           <RecordDate>{record.date}</RecordDate>
//           <RecordContent>{record.memo}</RecordContent>
//           <Image source={{ uri: record.image }} style={{ width: 100, height: 100 }} />
//           <RecordContent>Happiness: {record.happiness}</RecordContent>
//         </View>
//         </RecordBox>
//       ))}
//       {loading && <ActivityIndicator size="large" color="#0000ff" />}
//     </ScrollView>
//   );
// }

// export default RecordData;

// api 오면 사용
import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Image, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getRecord } from "../../../home/assets/apis/getRecord";
import {
  RecordBox,
  RecordContent,
  RecordDate,
} from "../../../../styles/styles";

function RecordData() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [lastRecordId, setLastRecordId] = useState(null);
  const [records, setRecords] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (!hasMore) return;
    setLoading(true);
    try {
      const response = await getRecord(lastRecordId);
      if (response.success && response.data.length > 0) {
        setRecords((prevRecords) => [...prevRecords, ...response.data]);
        setLastRecordId(response.data[response.data.length - 1]?.record_id);
      } else {
        setHasMore(false);
        console.log("No more records to fetch.");
      }
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = ({ nativeEvent }) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
    if (
      layoutMeasurement.height + contentOffset.y >= contentSize.height &&
      !loading &&
      hasMore
    ) {
      fetchData();
    }
  };

  return (
    <ScrollView onScroll={handleScroll} scrollEventThrottle={400}>
      {records.map((record, index) => (
        <RecordBox key={index}>
          <View>
            <RecordDate>{record.date}</RecordDate>
            <RecordContent>{record.memo}</RecordContent>
            {/* <Image
              // source={{ uri: record.img_url }}
              source={{
                uri: "https://i-want-to-be-happy.s3.ap-northeast-2.amazonaws.com/d4d6c55b-47d9-47a2-b084-3d5b2f8ba752.jpeg",
              }}
              style={{ width: 100, height: 100 }}
            /> */}
            <RecordContent>Happiness: {record.happiness}</RecordContent>
          </View>
        </RecordBox>
      ))}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </ScrollView>
  );
}

export default RecordData;
