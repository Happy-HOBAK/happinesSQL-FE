import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Component</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Test')}
        style={{
          padding: 10,
          backgroundColor: 'blue',
          borderRadius: 5,
          marginTop: 50
        }}
      >
        <Text style={{ color: 'white' }}>Go to Test</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
