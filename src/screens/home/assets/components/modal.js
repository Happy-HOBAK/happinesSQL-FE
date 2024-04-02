import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, Pressable, StyleSheet } from "react-native";

const ModalScreen = ({ onClose }) => {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const onPressModalClose = () => {
        console.log("팝업을 닫는 중 입니다");
        onClose();
    }

    return(
        <View style={styles.container}>
            <View style={styles.modalView}>
                <Text style={styles.modalTextStyle}>Modal이 출력되는 영역입니다.</Text>
                <Pressable onPress={onPressModalClose}>
                    <Text>Modal Close!</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTextStyle: {
        color: '#17191c',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50
    },
});

export default ModalScreen;
