import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { HomeText, InfoBtn, InfoImage, HomeTextView } from "../../styles/styles";
import FirstHome from "./assets/components/firstHome";
import Merge from "./assets/components/merge";
import SecondHome from "./assets/components/secondHome";

function Home() {

  const [showSecondHome, setShowSecondHome] = useState(false);
  //const navigation = useNavigation();
  
  console.log(showSecondHome);

  const navigateToSecondHome = () => {
    setShowSecondHome(true);
    
  };

  useFocusEffect(
    React.useCallback(()=>{
      setShowSecondHome(false);
    }, [])
  );

  return (
    <View>
      {/* {showSecondHome ? (
        <SecondHome />
      ) : (
        <Merge onActivitySave={navigateToSecondHome} />
      )} */}
      <SecondHome/>
    </View>
  );
}

export default Home;
