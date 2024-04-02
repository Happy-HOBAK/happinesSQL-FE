import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, InfoBtn, InfoImage, HomeTextView, StoreBtn, StoreText } from "../../../../styles/styles";
import { useRecoilValue } from "recoil";
import { EmotionState } from "../../../../common/recoil/atoms";

function SecondHome() {
    // const test = useRecoilValue(EmotionState)
    // console.log(test);
    
    return (
        <View>
        <Text style={{fontSize :40, marginTop: 200}}>두 번째 페이지</Text>
        </View>
    );
}

export default SecondHome;
