import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, InfoBtn, InfoImage, HomeTextView } from "../../styles/styles";
import UserIcon from './assets/Vector.png'

function Home() {
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
    </View>
  );
}

export default Home;
