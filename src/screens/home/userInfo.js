import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

function UserInfo() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

//   const saveImage = () => {
//   };

//   const deleteImage = () => {
//   };

  const saveUserInfo = () => {
    // 유저 정보 저장
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./assets/Vector.png')} style={{ width: 50, height: 50, marginBottom: 20 }} />
      <TouchableOpacity>
        <Text style={{ marginBottom: 20 }}>이미지 저장</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ marginBottom: 20 }}>이미지 삭제</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="이름"
        value={name}
        onChangeText={text => setName(text)}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20, width: 200 }}
      />
      <TextInput
        placeholder="성별"
        value={gender}
        onChangeText={text => setGender(text)}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20, width: 200 }}
      />
      <TextInput
        placeholder="나이"
        value={age}
        onChangeText={text => setAge(text)}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20, width: 200 }}
      />
      <TouchableOpacity onPress={saveUserInfo}>
        <Text style={{ marginBottom: 20 }}>저장하기</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ marginBottom: 20 }}>뒤로가기</Text>
      </TouchableOpacity>

    </View>
    
  );
}

export default UserInfo;
