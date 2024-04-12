import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { HomeText, BackImage, SecondHomeTextView, UserText, ThirdText, BackBtn, ThirdPlaceInput, StoreText, StoreBtn, ThirdHomeText, ThirdMemoInput, ThirdPicInput } from "../../../../styles/styles";
import { useRecoilState } from "recoil";
import { EmotionState, MemoState, LocationState, ImageState} from "../../../../common/recoil/atoms";
import backicon from '../images/back.png'
import searchicon from '../images/search.png'
import * as Location from "expo-location";
import * as ImagePicker from 'expo-image-picker';
import { sendToServer } from "../apis/sendToServer";

const ThirdHome = ({ onActivitySave }) => {
    const navigation = useNavigation(); 
    const [emotion, setEmotion] = useRecoilState(EmotionState); 
    const [memo, setMemo] = useRecoilState(MemoState); 
    const [location, setLocation] = useRecoilState(LocationState);
    const [image, setImage] = useRecoilState(ImageState); 
    const [city, setCity] = useState("📌 위치 가져오는중 ...");
    const [errorMsg, setErrorMsg] = useState(null);
    const [userCity, setUserCity] = useState("");
    const [locationEnabled, setLocationEnabled] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

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
            const currentCity = ` 📌 ${reverseGeocode[0].city} ${reverseGeocode[0].district}`;
            setCity(currentCity);
        } catch (error) {
            console.error("위치 정보를 가져오는 중 오류 발생:", error);
            setErrorMsg("위치 정보를 가져오는 중 오류가 발생했습니다.");
        }
    };
    
    const handleImagePick = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.canceled) {
                setSelectedImage(result.uri);
                setImage(result.uri);
            }
        } catch (error) {
            console.error("이미지를 선택하는 중 오류 발생:", error);
        }
    };

    const saveAll = async () => {
        try {
            console.log("emotion:", emotion, "memo:", memo, "location:", location, "image:", image);
            await sendToServer(emotion, memo, location, image);
            onActivitySave();
            console.log("데이터가 서버에 저장되었습니다.");
        } catch (error) {
            console.log("emotion:", emotion, "memo:", memo, "location:", location, "image:", image);
            console.error("데이터를 서버에 저장하는 중 오류 발생:", error);
        }
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
                value={memo}
                onChangeText={text => setMemo(text)}
                />

                <UserText>사진</UserText>
                <ThirdPicInput
                onPress={handleImagePick}
                style={{marginTop: 10}}
                >
                <ThirdText>📸 사진 추가하기</ThirdText>
                </ThirdPicInput>
                {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
                <StoreBtn onPress={saveAll}>
                    <StoreText>저장하기</StoreText>
                </StoreBtn>
                
            </SecondHomeTextView>
            
        </View>
    );
}

export default ThirdHome;
