import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, BackImage, SecondHomeTextView, UserText, SearchText, BackBtn, ThirdPlaceInput, StoreText, StoreBtn, ThirdHomeText, ThirdMemoInput, ThirdPicInput } from "../../../../styles/styles";
import { useRecoilValue } from "recoil";
import { EmotionState } from "../../../../common/recoil/atoms";
import backicon from '../images/back.png'
import searchicon from '../images/search.png'
import ModalScreen from "./modal";

function ThirdHome() {
    const navigation = useNavigation(); 
    
    const saveAll = () => {
        // 활동 저장 로직
      };
    
    return (
        <View>
            <BackBtn>
                <BackImage source={backicon}/>
            </BackBtn>

            <SecondHomeTextView>
                <HomeText>
                    메모할 내용이 있나요?
                </HomeText>
                <ThirdHomeText>
                    사진이나 장소를 추가하세요
                </ThirdHomeText>
                <ThirdPlaceInput 
                placeholder="  📌 장소 추가하기" 
                style={{marginTop: 30}}/>
                <View>
                <UserText>메모</UserText>
                </View>
                <ThirdMemoInput
                placeholder="  📝 메모 추가하기" 
                style={{marginTop: 10}}
                />

                <UserText>사진</UserText>
                <ThirdPicInput
                placeholder="  📸 사진 추가하기" 
                style={{marginTop: 10}}
                />

                <StoreBtn onPress={saveAll}>
                    <StoreText>저장하기</StoreText>
                </StoreBtn>
                
            </SecondHomeTextView>
            
        </View>
    );
}

export default ThirdHome;