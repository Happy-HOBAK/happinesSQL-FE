import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, BackImage, SecondHomeTextView, UserText, SearchText, BackBtn, SecondInput, SearchBtn, ActivityBtn } from "../../../../styles/styles";
import { useRecoilValue } from "recoil";
import { EmotionState } from "../../../../common/recoil/atoms";
import backicon from '../images/back.png'
import searchicon from '../images/search.png'
import ModalScreen from "./modal";

const SecondHome = ({ SecondonActivitySave }) => {
    const navigation = useNavigation(); 
    // const test = useRecoilValue(EmotionState)
    // console.log(test);
    
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    }

    const SecondsaveActivity = () => {
        SecondonActivitySave();
        // 활동 저장 로직
      };
    
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
                <SearchBtn onPress={toggleModal}>
                    <SearchText>
                        + 활동 추가하기
                    </SearchText>
                </SearchBtn>
                <UserText>카테고리 이름</UserText>
                <View style={{flexDirection:"row", padding: 10}}>
                <ActivityBtn
                onPress={SecondsaveActivity}
                ></ActivityBtn>
                <ActivityBtn></ActivityBtn>
                <ActivityBtn></ActivityBtn>
                </View>
                <View style={{flexDirection:"row", padding: 10}}>
                <ActivityBtn></ActivityBtn>
                <ActivityBtn></ActivityBtn>
                <ActivityBtn></ActivityBtn>
                </View>
                <View style={{flexDirection:"row", padding: 10}}s>
                <ActivityBtn></ActivityBtn>
                <ActivityBtn></ActivityBtn>
                <ActivityBtn></ActivityBtn>
                </View>
            </SecondHomeTextView>
            <Modal 
            visible={isModalVisible} 
            animationType="fade"
            transparent={true}
            >
                 <ModalScreen onClose={toggleModal} />
            </Modal>
        </View>
    );
}

export default SecondHome;