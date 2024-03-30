import styled from "styled-components";
import { Dimensions } from 'react-native';
import { theme } from "./theme";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const SampleBtn = styled.TouchableOpacity`
    margin-top:300px;
    width: windowWidth * 0.5;
    height: windowHeight * 0.5;
    background-color:${props => theme.main};
    border-radius: 10px;
`;

export const StoreBtn = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    margin-top:40px;
    width: 300px;
    height: 60px;
    background-color:${props => theme.main};
    border-radius: 10px;
`;

export const InfoBtn = styled.TouchableOpacity`
    margin-top:50px;
    margin-right:20px;
    align-self: flex-end;
    padding: 10px;
`;

export const InfoImage = styled.Image`
    height: 35px;
    width: 35px;
`;

export const HomeText = styled.Text`
    font-size: 30px;
    font-weight: 500;
`;

export const StoreText = styled.Text`
    font-size: 24px;
    font-weight: 600;
`;

export const HomeTextView = styled.View`
    margin-top:50px;
    align-items: center;
`;

export const EmotionText = styled.Text`
    position: absolute;
    font-size: 150px;
    text-align: center;
    top: 55px;
`;