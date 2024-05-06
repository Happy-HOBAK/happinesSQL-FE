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

export const DataeBtn = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    margin-top:80%;
    width: 250px;
    height: 50px;
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
    font-size: 31px;
    font-weight: 600;
    color: #0B1623;
`;

export const StoreText = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: white;
`;

export const DataText = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: white;
`;

export const HappyText = styled.Text`
    font-size: 22px;
    font-weight: 600;
    color: #0B1623;
`;

export const ThirdHomeText = styled.Text`
    margin-top: 6px;
    font-size: 20px;
    font-weight: 600;
    color: #0B1623;
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

export const ThirdPlaceInput = styled.TextInput`
    padding: 10px;
    margin-bottom: 20px;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    background-color: ${props => theme.grey_1};
    
`;

export const ThirdMemoInput = styled.TextInput`
    padding: 10px;
    margin-bottom: 20px;
    width: 300px;
    height: 100px;
    border-radius: 10px;
    background-color: ${props => theme.grey_1};
    /* &::placeholder{
        color: ${props => theme.text};
    } */
`;

export const ThirdPicInput = styled.TouchableOpacity`
    padding: 10px;
    margin-bottom: 20px;
    width: 300px;
    height: 100px;
    border-radius: 10px;
    background-color: ${props => theme.grey_1};
    flex-direction: row;
    align-items: center;
`;

export const ThirdText = styled.Text`
    text-align: center;
    margin-left: 3%;
    color: #CCCCCD;
`;

export const EmotionText = styled.Text`
    position: absolute;
    font-size: 150px;
    text-align: center;
    top: 55px;
    color: #0B1623;
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
    color: #0B1623;
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
    color: #0B1623;
`;

export const CategoryText = styled.Text`
    font-size: 19px;   
    font-weight: 800;
    margin-left: 35px;
    color: #0B1623;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const SearchBtn = styled.TouchableOpacity`
    border-radius: 20px;
    margin-left: 54%;
    width: 110px;
    height: 38px;
    background-color: ${props => theme.grey_2};
    align-items: center;
    justify-content: center;
`;

export const SearchText = styled.Text`
    font-size: 14px;
    font-weight: 600;
    color: #0B1623;
`;

export const ActivityBtn = styled.TouchableOpacity`
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 20px;
    width: 100px;
    height: 100px;
    background-color: ${props => theme.grey_2};
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;

export const PlusBtn = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 40px;
    background-color:${props => theme.main};
    border-radius: 10px;
    margin-top: 30px;
`;

export const PlusText = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: white;
`;

export const PlusInput = styled.TextInput`
    padding: 10px;
    margin-bottom: 20px;
    width: 200px;
    height: 45px;
    border-radius: 10px;
    border-color: ${props => theme.grey_3};
    border-width: 1px;
`;

export const RecordBox = styled.View`
    background-color: ${theme.grey_1};
    border-radius: 10px;
    width: 300px;
    height: 260px;
    margin-top: 25px;
`;

export const RecordContent = styled.Text`
    font-size: 16px;
    font-weight: 300;
    text-align: left;
    margin-left: 5px; 
    padding: 15px;
    color: #0B1623;
`;

export const RecordDate = styled.Text`
    margin-top : 8px;
    font-size: 24px;
    font-weight: 600;
    text-align: left; 
    margin-left: 5px;
    padding: 15px;
    color: #0B1623;
`;

export const ReportBox = styled.View`
    background-color: ${theme.grey_1};
    border-radius: 10px;
    width: 300px;
    height: 320px;
    margin-top: 25px;
    align-items: center;
`;

export const SecondReportBox = styled.View`
    background-color: ${theme.grey_1};
    border-radius: 10px;
    width: 300px;
    height: 190px;
    margin-top: 25px;
    align-items: center;
`;

export const SearchView = styled.View`
    margin-top: 15px;
    width: ${windowWidth}px;
`;

export const CalenderView = styled.View`
    flex: 1;
    justify-content: center;
`;

export const ColorView = styled.View`
    flex-direction: row;
    margin-bottom: 8px;
    /* background-color: ${theme.grey_1};
    border-radius: 10px;
    width: 300px;
    height: 320px;
    margin-top: 25px;
    align-items: center; */
`;

export const ColorTitleText = styled.Text`
    margin-top: 20%;
    margin-left: 25%;
    font-size: 16px;
    color: ${theme.grey};
`;

export const ColorContentText = styled.Text`
    /* margin-top: 10%; */
    margin-left: 10%;
    font-size: 14px;
    color: ${theme.grey};
`;

export const ColorImage = styled.Image`
    width: 20px;
    height: 20px;
`
export const CText = styled.Text`
    /* font-size: 14px; */
    color: ${theme.grey};
`;