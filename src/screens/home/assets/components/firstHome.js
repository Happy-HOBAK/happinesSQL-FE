import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, InfoBtn, InfoImage, HomeTextView, StoreBtn, StoreText } from "../../../../styles/styles";
import UserIcon from '../Vector.png'
import FirstEmotions from "./firstEmotions";

function FirstHome() {
  const navigation = useNavigation();

  return (
    <View>
      <InfoBtn onPress={() => navigation.navigate('UserInfo')}>
        <InfoImage source={UserIcon} />
      </InfoBtn>

      <HomeTextView>
        <HomeText>
          지금의 기분은 어때요?
        </HomeText>
      </HomeTextView>
      <FirstEmotions/>
      <View style={{alignItems:"center"}}>
      <StoreBtn>
        <StoreText>활동 입력하기</StoreText>
      </StoreBtn>
      </View>
    </View>
  );
}

export default FirstHome;
