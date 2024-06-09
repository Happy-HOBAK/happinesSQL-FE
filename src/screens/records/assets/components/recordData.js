import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Image, ActivityIndicator } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { getRecord } from "../../../home/assets/apis/getRecord";
import {
  RecordBox,
  RecordContent,
  RecordDate,
} from "../../../../styles/styles";
import {
  StyledImage,
  StyledRecordBox,
  StyledRecordContent,
  StyledRecordDate,
} from "./record.style";
import { emotion } from "../../../../common/data/emotion";

function RecordData() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [lastRecordId, setLastRecordId] = useState(null);
  const [records, setRecords] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (isFocused) {
      fetchData(true);
    }
  }, [isFocused]);

  const fetchData = async (reset = false) => {
    if (!hasMore && !reset) return;
    setLoading(true);
    try {
      const response = await getRecord(reset ? null : lastRecordId);
      if (response.success && response.data.length > 0) {
        setRecords((prevRecords) =>
          reset ? response.data : [...prevRecords, ...response.data]
        );
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

  const getEmoji = (happiness) => {
    const emotionObject = emotion.find((e) => e.id === happiness);
    return emotionObject ? emotionObject.emoji : null;
  };

  return (
    <ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={400}
      style={{ marginLeft: 10, marginRight: 10 }}
      contentContainerStyle={{ alignItems: "center", alignContent: "center" }}
    >
      {records.map((record, index) => (
        <StyledRecordBox key={index}>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <StyledRecordDate style={{ marginTop: -50 }}>
                    {record.date}
                  </StyledRecordDate>
                  <Image
                    source={getEmoji(record.happiness)}
                    style={{
                      width: 20,
                      height: 20,
                      marginTop: -50,
                    }}
                  />
                </View>
                <StyledRecordContent>{record.memo}</StyledRecordContent>
              </View>
              <StyledImage
                source={{ uri: record.img_url }}
                onError={handleImageError}
              />
            </View>
          </View>
        </StyledRecordBox>
      ))}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </ScrollView>
  );
}

export default RecordData;
