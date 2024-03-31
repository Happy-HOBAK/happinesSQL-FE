import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { data } from "../../../../common/data/data";

function RecordData() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState([]);

//   const test = records.map((record, index) => {
//     record.image
//   })
//   console.log(test)

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    setLoading(true);
    const startIndex = (page - 1) * 9;
    const endIndex = startIndex + 9;
    const newRecords = data.documents.records.slice(startIndex, endIndex);
    setRecords(prevRecords => [...prevRecords, ...newRecords]);
    setLoading(false);
  };

  const handleScroll = ({ nativeEvent }) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
    const isEndOfList = layoutMeasurement.height + contentOffset.y >= contentSize.height;
    if (isEndOfList && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <ScrollView onScroll={handleScroll} scrollEventThrottle={400}>
      {records.map((record, index) => (
        <View key={index}>
          <Image source={{ uri: record.image }} style={{ width: 100, height: 100 }} />
          <Text>{record.memo}</Text>
          <Text>{record.date}</Text>
          <Text>Happiness: {record.happiness}</Text>
        </View>
      ))}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </ScrollView>
  );
}

export default RecordData;
