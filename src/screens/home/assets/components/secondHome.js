import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, BackImage, SecondHomeTextView, StoreBtn, StoreText, BackBtn, SecondInput, SearchBtn } from "../../../../styles/styles";
import { useRecoilValue } from "recoil";
import { EmotionState } from "../../../../common/recoil/atoms";
import backicon from '../images/back.png'
import searchicon from '../images/search.png'

function SecondHome() {
    const navigation = useNavigation(); 
    // const test = useRecoilValue(EmotionState)
    // console.log(test);
    
    return (
        <View>
            <BackBtn>
                <BackImage source={backicon}/>
            </BackBtn>

            <SecondHomeTextView>
                <HomeText>
                무엇을 하고 있었나요?
                </HomeText>
                <SecondInput 
                placeholder="카테고리 또는 활동을 검색하세요" 
                style={{marginTop: 30}}/>
                <SearchBtn/>
            </SecondHomeTextView>
        </View>
    );
}

export default SecondHome;
