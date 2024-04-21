import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, ScrollView, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, BackImage, SecondHomeTextView, CategoryText, SearchText, BackBtn, SecondInput, SearchBtn, ActivityBtn } from "../../../../styles/styles";
import { useRecoilValue } from "recoil";
import { ActivityState } from "../../../../common/recoil/atoms";
import backicon from '../images/back.png'
import searchicon from '../images/search.png'
import ModalScreen from "./modal";
import { categorykData } from "../../../../common/data/category";
import { useRecoilState } from "recoil";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const SecondHome = ({ SecondonActivitySave }) => {
    const navigation = useNavigation(); 
    const [activitystate, setActivityState] = useRecoilState(ActivityState);

    // function chunkArray(array, size) {
    //     const chunkedArr = [];
    //     let index = 0;
        
    //     while (index < array.length) {
    //         chunkedArr.push(array.slice(index, index + size));
    //         index += size;
    //     }
        
    //     return chunkedArr;
    // }
    //const categories = categorykData.categories.map(cg=>cg.name)
    //const category = categorykData.categories[0].name
    //const id = categorykData.categories[0].activities.map(id=>id.id)
    //const emoji = categorykData.categories[0].activities[0].emoji
    
    // const categories = categorykData.categories.map(cat => ({
    //     name: cat.name,
    //     activities: cat.activities.map(act => ({
    //         name: act.name,
    //         emoji: act.emoji
    //     }))
    // }));
    const categories = categorykData.categories.map(cat => ({
        name: cat.name,
        activities: Array.from({ length: Math.ceil(cat.activities.length / 3) }, (_, index) =>
            cat.activities.slice(index * 3, index * 3 + 3).map(act => ({
                id: act.id,
                name: act.name,
                emoji: act.emoji
            }))
        )
    }));
    
    // 각 카테고리의 이름과 3개의 활동의 이름과 이모지 출력
    // categories.forEach(cat => {
    //     console.log(cat.name);
    //     cat.activities.forEach(activityGroup => {
    //         activityGroup.forEach(activity => {
    //             console.log(`${activity.name}: ${activity.emoji}`);
    //         });
    //     });
    // });
    
    // console.log(id)
    // console.log(activity)
    // console.log(emoji)


    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    }

    const press = (activityId) => {
        setActivityState(activityId)
        SecondsaveActivity();
    }
    const SecondsaveActivity = () => {
        SecondonActivitySave();
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
                <View style={{ marginStart: 30, marginBottom: 10}}>
                <ScrollView horizontal showsVerticalScrollIndicator={false} pagingEnabled>
                    {categories.map((category, index) => (
                        <View style={{ paddingRight: 20}}key={index}>
                            <CategoryText>{category.name}</CategoryText>
                            <View style={{flex:1}}>
                            <ScrollView 
                            contentContainerStyle={{ marginVertical: 10}}
                            style={{ maxHeight: windowHeight * 0.6, flex: 1, flexDirection:"row", flexWrap: "wrap", padding: 10 }}
                            >
                                {category.activities.map((activityGroup, groupIndex) => (
                                    <View key={groupIndex} style={{ flexDirection: 'row' }}>
                                        {activityGroup.map((activity, activityIndex) => (
                                            <ActivityBtn key={activityIndex} onPress={() => press(activity.id)}>
                                                <Text>{activity.emoji}</Text>
                                                <Text>{activity.name}</Text>
                                            </ActivityBtn>
                                        ))}
                                    </View>
                                ))}
                            </ScrollView>
                            </View>
                        </View>
                    ))}
                </ScrollView>
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