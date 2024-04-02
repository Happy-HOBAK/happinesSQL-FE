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

export const UserImageBtn = styled.TouchableOpacity`
    background-color:${props => theme.main};
    border-radius: 10px;
    height: 35px;
    width: 135px;
    align-items: center;
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

export const BackBtn = styled.TouchableOpacity`
    margin-top:70px;
    margin-left: 15px;
`;

export const BackImage = styled.Image`

    height: 40px;
    width: 40px;
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

export const SecondHomeTextView = styled.View`
    margin-top:10px;
    align-items: center;
`;

export const SecondInput = styled.TextInput`
    padding: 10px;
    margin-bottom: 20px;
    width: 300px;
    height: 35px;
    border-radius: 10px;
    border-color: ${props => theme.grey_3};
    border-width: 1px;
`;

export const EmotionText = styled.Text`
    position: absolute;
    font-size: 150px;
    text-align: center;
    top: 55px;
`;

export const RecordTextView = styled.View`
    margin-top:100px;
    margin-bottom: 30px;
    align-items: center;
`;


export const ReportText = styled.Text`
    margin-top: 8px;
    font-size: 14px;
    text-align: center;
`;

export const UserInput = styled.TextInput`
    padding: 10px;
    margin-bottom: 20px;
    width: 300px;
    height: 60px;
    border-radius: 10px;
    border-color: ${props => theme.grey_3};
    border-width: 1px;
`;

export const UserText = styled.Text`
    font-size: 19px;   
    margin-bottom: 8px;
    margin-right: 240px;
    font-weight: 500;
`;

export const SearchBtn = styled.TouchableOpacity`
    border-radius: 20px;
    margin-left: 54%;
    width: 110px;
    height: 38px;
    background-color: ${props => theme.grey_3};
    align-items: center;
    justify-content: center;
`;

export const SearchText = styled.Text`
    font-size: 14px;
    font-weight: 600;
`;

export const ActivityBtn = styled.TouchableOpacity`
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 20px;
    width: 100px;
    height: 100px;
    background-color: ${props => theme.grey_3};
    align-items: center;
    justify-content: center;
`;