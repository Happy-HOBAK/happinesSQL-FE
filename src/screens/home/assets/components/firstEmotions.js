import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { emotion } from "../../../../common/data/emotion";
import CircleSlider from "react-native-circle-slider";
import { theme } from "../../../../styles/theme";
import { EmotionText } from "../../../../styles/styles";

const FirstEmotions = () => {
  const [selectedEmotionIndex, setSelectedEmotionIndex] = useState(0);

  useEffect(() => {
    // const handleSliderChange = (value) => {
    //   const index = Math.round((value / 360) * (emotion.length - 1));
    //   setSelectedEmotionIndex(index);
    // };
  }, []);

  const handleSliderChange = (value) => {
    requestAnimationFrame(() => {
      const index = Math.round((value / 360) * (emotion.length - 1));
      setSelectedEmotionIndex(index);
    });
  };

  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 40 }}
    >
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
      <EmotionText>{emotion[selectedEmotionIndex].emotion}</EmotionText>
    </View>
  );
};

export default FirstEmotions;
