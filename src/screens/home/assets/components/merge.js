import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, InfoBtn, InfoImage, HomeTextView, StoreBtn, StoreText } from "../../../../styles/styles";
import UserIcon from '../Vector.png'
import CircleSlider from "react-native-circle-slider";
import { theme } from "../../../../styles/theme";
import { EmotionText } from "../../../../styles/styles";
import { emotion } from "../../../../common/data/emotion";
import { useRecoilState, useRecoilValue } from "recoil";
import { EmotionState } from "../../../../common/recoil/atoms";

const Merge = ({ onActivitySave }) => {
  const [selectedEmotionIndex, setSelectedEmotionIndex] = useState(0);
  const navigation = useNavigation(); 
  const [activity, setActivity] = useRecoilState(EmotionState)
  const selectedEmotion = emotion[selectedEmotionIndex].emotion;

  const handleSliderChange = (value) => {
    requestAnimationFrame(() => {
      const index = Math.round((value / 360) * (emotion.length - 1));
      setSelectedEmotionIndex(index);
    });
  };

  const saveActivity = () => {
    setActivity(selectedEmotion);
    onActivitySave();
    // 활동 저장 로직
  };

  // recoil 작동 확인 로그
  
//   const myAtomValue = useRecoilValue(EmotionState);

//   useEffect(() => {
//     console.log("MyAtom value:", myAtomValue);
//   }, [myAtomValue]);

//   useEffect(()=>{
//     console.log(selectedEmotion);
//   })

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
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
        <CircleSlider 
          textSize={2}
          btnRadius={20}
          dialWidth={20}
          meterColor={theme.main}
          strokeColor={theme.grey_2}
          textColor={theme.main}
          strokeWidth={20}
          value={selectedEmotionIndex * (360 / (emotion.length - 1))}
          onValueChange={handleSliderChange}
        />
        <EmotionText>
          {selectedEmotion}
        </EmotionText>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={saveActivity}>
          <StoreBtn>
            <StoreText>활동 입력하기</StoreText>
          </StoreBtn>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Merge;
