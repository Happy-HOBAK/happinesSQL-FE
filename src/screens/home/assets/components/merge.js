import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  HomeText,
  InfoBtn,
  InfoImage,
  HomeTextView,
  StoreBtn,
  StoreText,
} from "../../../../styles/styles";
import UserIcon from "../images/Vector.png";
import CircleSlider from "react-native-circle-slider";
import { theme } from "../../../../styles/theme";
import { EmotionText } from "../../../../styles/styles";
import { emotion } from "../../../../common/data/emotion";
import { useRecoilState, useRecoilValue } from "recoil";
import { EmotionState } from "../../../../common/recoil/atoms";

const Merge = ({ onActivitySave }) => {
  const [selectedEmotionIndex, setSelectedEmotionIndex] = useState(0);
  const navigation = useNavigation();
  const [activity, setActivity] = useRecoilState(EmotionState);
  const selectedEmotion = emotion[selectedEmotionIndex].emotion;
  const happiness = emotion[selectedEmotionIndex].id;
  const selectedEmoji = emotion[selectedEmotionIndex].emoji;

  const handleSliderChange = (value) => {
    requestAnimationFrame(() => {
      const index = Math.round((value / 360) * (emotion.length - 1));
      setSelectedEmotionIndex(index);
    });
  };

  const saveActivity = () => {
    setActivity(happiness);
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
      <InfoBtn onPress={() => navigation.navigate("UserInfo")}>
        <InfoImage source={UserIcon} />
      </InfoBtn>

      <HomeTextView>
        <HomeText>지금의 기분은 어때요?</HomeText>
      </HomeTextView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <View style={{ position: "relative", width: 300, height: 300 }}>
          <CircleSlider
            textSize={0.1}
            btnRadius={20}
            dialWidth={23}
            meterColor={theme.grey_2}
            strokeColor={theme.main}
            textColor={theme.main}
            strokeWidth={23}
            value={selectedEmotionIndex * (360 / (emotion.length - 1))}
            onValueChange={handleSliderChange}
          />
          <Image
            source={selectedEmoji}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: [{ translateX: -65 }, { translateY: -65 }],
              width: 130,
              height: 130,
            }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <StoreBtn onPress={saveActivity}>
          <StoreText>다음으로</StoreText>
        </StoreBtn>
      </View>
    </View>
  );
};

export default Merge;
