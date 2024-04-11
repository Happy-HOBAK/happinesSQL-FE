import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, BackImage, SecondHomeTextView, UserText, SearchText, BackBtn, ThirdPlaceInput, StoreText, StoreBtn, ThirdHomeText, ThirdMemoInput, ThirdPicInput } from "../../../../styles/styles";
import { useRecoilValue } from "recoil";
import { EmotionState } from "../../../../common/recoil/atoms";
import backicon from '../images/back.png'
import searchicon from '../images/search.png'
import * as Location from "expo-location";


const ThirdHome = ({ onActivitySave }) => {
    const navigation = useNavigation(); 
    const [city, setCity] = useState("위치 가져오는중 ...");
    const [errorMsg, setErrorMsg] = useState(null);
    const [userCity, setUserCity] = useState("");
    const [locationEnabled, setLocationEnabled] = useState(true);

    useEffect(() => {
        getLocation();
    }, []);

    const getLocation = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('위치 권한을 허용해야 합니다.');
                setLocationEnabled(false);
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;
            const reverseGeocode = await Location.reverseGeocodeAsync({ latitude, longitude });
            const currentCity = `${reverseGeocode[0].city} ${reverseGeocode[0].district}`;
            setCity(currentCity);
        } catch (error) {
            console.error("위치 정보를 가져오는 중 오류 발생:", error);
            setErrorMsg("위치 정보를 가져오는 중 오류가 발생했습니다.");
        }
    };
    

    const saveAll = () => {
        onActivitySave()
        console.log("onActivitySave called");
        // 활동 저장 로직
      };
    
    return (
        <View>
            <BackBtn>
                <BackImage source={backicon}/>
            </BackBtn>

            <SecondHomeTextView>
                <HomeText>
                    메모할 내용이 있나요?
                </HomeText>
                <ThirdHomeText>
                    사진이나 장소를 추가하세요
                </ThirdHomeText>
                {locationEnabled ? (
                <ThirdPlaceInput 
                 placeholder="  📌 장소 추가하기" 
                 style={{marginTop: 30}}
                 value={userCity || city}
                 onChangeText={text => setUserCity(text)}
                 />) : (
                 <View>
                 <ThirdPlaceInput 
                 placeholder=" 장소를 직접 입력해주세요! ex)서울특별시 상도동" 
                 style={{marginTop: 30}}
                 value={userCity}
                 onChangeText={text => setUserCity(text)}
                 />
                 <Text style={{ textAlign: "center",
                    marginBottom: 10, color:"red"}}>{errorMsg}</Text>
                </View>) }
               


                <View>
                <UserText>메모</UserText>
                </View>
                <ThirdMemoInput
                placeholder="  📝 메모 추가하기" 
                style={{marginTop: 10}}
                />

                <UserText>사진</UserText>
                <ThirdPicInput
                placeholder="  📸 사진 추가하기" 
                style={{marginTop: 10}}
                />

                <StoreBtn onPress={saveAll}>
                    <StoreText>저장하기</StoreText>
                </StoreBtn>
                
            </SecondHomeTextView>
            
        </View>
    );
}

export default ThirdHome;