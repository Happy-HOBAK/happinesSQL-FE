import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { HomeText, InfoBtn, InfoImage, HomeTextView } from "../../styles/styles";
import FirstHome from "./assets/components/firstHome";
import Merge from "./assets/components/merge";
import SecondHome from "./assets/components/secondHome";
import ThirdHome from "./assets/components/thirdHome";

function Home() {
  const [showSecondHome, setShowSecondHome] = useState(false);
  const [showThirdHome, setShowThirdHome] = useState(false);
  const navigation = useNavigation();
  
  console.log("showSecondHome : " + showSecondHome);
  console.log("showThirdHome : " + showThirdHome);

  const navigateToSecondHome = () => {
    setShowSecondHome(true);
    setShowThirdHome(false);
  };

  const navigateToThirdHome = () => {
    setShowSecondHome(false);
    setShowThirdHome(true);
  };

  const navigateToFirstome = () => {
    setShowSecondHome(false);
    setShowThirdHome(true);
  };

  useFocusEffect(
    React.useCallback(()=>{
      setShowSecondHome(false);
      setShowThirdHome(false);
    }, [])
  );

  return (
    // <View>
    //   {showSecondHome && (
    //     <SecondHome SecondonActivitySave={navigateToThirdHome} />
    //   )}
    //   {showThirdHome && (
    //     <ThirdHome onActivitySave={() => {
    //       setShowSecondHome(false);
    //       setShowThirdHome(false);
    //   }} />
    //   )}
    //   {!showSecondHome && !showThirdHome && (
    //     <Merge onActivitySave={navigateToSecondHome} />
    //   )}
    // </View>
    <ThirdHome/>
  );
}

export default Home;
