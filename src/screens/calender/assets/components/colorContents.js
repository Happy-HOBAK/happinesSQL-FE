import { View, Text, Image } from "react-native";
import { ColorView, ColorTitleText, ColorContentText, ColorImage, CText } from "../../../../styles/styles";
import first from '../../../../common/icons/Ellipse 31.png'
import second from '../../../../common/icons/Ellipse 32.png'
import third from '../../../../common/icons/Ellipse 33.png'
import fourth from '../../../../common/icons/Ellipse 34.png'
import fifth from '../../../../common/icons/Ellipse 35.png'

export const ColorContents = () => {
  return (
    <View style={{flexDirection:"row"}}>
    <View>
        <ColorTitleText>색상의 의미는?</ColorTitleText>
      </View>
      <View style={{ marginTop: 40}}>
        <ColorView>
            <ColorImage source={first}/> 
            <CText>  행복수치 평균 00 이상</CText>
        </ColorView>
        <ColorView>
            <ColorImage source={second}/> 
            <CText>  행복수치 평균 00 이상</CText>
        </ColorView>
        <ColorView>
            <ColorImage source={third}/> 
            <CText>  행복수치 평균 00 이상</CText>
        </ColorView>
        <ColorView>
            <ColorImage source={fourth}/> 
            <CText>  행복수치 평균 00 이상</CText>
        </ColorView>
        <ColorView>
            <ColorImage source={fifth}/> 
            <CText>  행복수치 평균 00 이상</CText>
        </ColorView>
      </View>
    </View>
  );
};
