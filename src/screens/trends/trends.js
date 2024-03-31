import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, InfoBtn, InfoImage, RecordTextView } from "../../styles/styles";

function Trends() {
  const navigation = useNavigation();

  return (
    <View>
      <RecordTextView>
        <HomeText>
            행복 트렌드
        </HomeText>
        <Text style={{fontSize: 30, marginTop:300}}>
          준비중입니다!
        </Text>
    </RecordTextView>
    </View>
  );
}

export default Trends;
