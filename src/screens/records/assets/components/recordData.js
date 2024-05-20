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

  const handleImageError = (error) => {
    console.error("이미지 로드 실패:", error.nativeEvent.error);
  };

  return (
    <ScrollView onScroll={handleScroll} scrollEventThrottle={400}>
      {records.map((record, index) => (
        <RecordBox key={index}>
          <View>
            <RecordDate>{record.date}</RecordDate>
            <RecordContent>{record.memo}</RecordContent>
            <Image
              source={{ uri: record.img_url }}
              style={{ width: 100, height: 100 }}
              onError={handleImageError}
            />
            <RecordContent>Happiness: {record.happiness}</RecordContent>
          </View>
        </RecordBox>
      ))}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </ScrollView>
  );
}

export default RecordData;
