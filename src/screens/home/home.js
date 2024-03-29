import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SampleBtn } from "../../styles/styles";

function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Component</Text>
      <SampleBtn onPress={() => navigation.navigate('Test')}>
        <Text>
        Go to Test
        </Text>
      </SampleBtn>
    </View>
  );
}

export default Home;
