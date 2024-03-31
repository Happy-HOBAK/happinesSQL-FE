import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, InfoBtn, InfoImage, HomeTextView } from "../../styles/styles";
import UserIcon from './assets/Vector.png'
import FirstHome from "./assets/components/firstHome";
import Merge from "./assets/components/merge";

function Home() {
  const navigation = useNavigation();

  return (
    <Merge/>
  );
}

export default Home;
