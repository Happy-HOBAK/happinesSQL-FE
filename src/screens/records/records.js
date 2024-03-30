import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, InfoBtn, InfoImage, HomeTextView } from "../../styles/styles";
import { data } from "../../common/data/data";

function Records() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      {chunkArray(data.documents.records, 9).map((chunk, index) => (
        <View key={index}>
          {chunk.map((record) => (
            <View key={record.record_id}>
              <Image source={{ uri: record.image }} style={{ width: 100, height: 100 }} />
              <Text>{record.memo}</Text>
              <Text>{record.date}</Text>
              <Text>Happiness: {record.happiness}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

function chunkArray(array, size) {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }  

export default Records;
