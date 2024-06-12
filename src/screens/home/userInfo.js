import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { InitialRouteContext } from "../../common/context/context";
import { getUserInfo } from "./assets/apis/getUserInfo";
import { theme } from "../../styles/theme";
import { ImageBtn, ImageBtnText } from "./userInfo.style";

function UserInfo() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const { setInitialRoute } = useContext(InitialRouteContext);

  // 유저 정보 저장 함수
  const saveUserInfo = () => {
    // 유저 정보 저장
    // 이것두 recoil~~~
  };

  const handleLogout = async () => {
    const autoLogin = await AsyncStorage.getItem("autoLogin");

    // if (autoLogin !== "true") {
    //   await AsyncStorage.removeItem("username");
    //   await AsyncStorage.removeItem("password");
    //   await AsyncStorage.removeItem("name");
    //   await AsyncStorage.removeItem("accessToken");
    //   await AsyncStorage.removeItem("autoLogin");
    // }
    await AsyncStorage.removeItem("username");
    await AsyncStorage.removeItem("password");
    await AsyncStorage.removeItem("name");
    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("autoLogin");

    setInitialRoute("Landing");

    navigation.reset({
      index: 0,
      routes: [{ name: "Landing" }],
    });
  };

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        setName(userInfo.data.name);
        setGender(userInfo.data.gender);
        setAge(userInfo.data.age.toString());
      } catch (error) {
        console.error("Failed to load user info", error);
      }
    };

    loadUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../home/assets/images/Vector.png")}
        style={styles.image}
      />

      <TouchableOpacity style={styles.imageBtn}>
        <Text style={styles.imageBtnText}>이미지 선택</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteBtn}>
        <Text style={styles.deleteBtnText}>이미지 삭제</Text>
      </TouchableOpacity>

      <Text style={styles.label}>이름</Text>
      <TextInput
        style={styles.input}
        returnKeyType="done"
        placeholder="이름"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>성별</Text>
      <TextInput
        style={styles.input}
        returnKeyType="done"
        placeholder="성별"
        value={gender}
        onChangeText={(text) => setGender(text)}
      />

      <Text style={styles.label}>나이</Text>
      <TextInput
        style={styles.input}
        returnKeyType="done"
        keyboardType="number-pad"
        placeholder="나이"
        value={age}
        onChangeText={(text) => setAge(text)}
      />

      <TouchableOpacity style={styles.saveBtn} onPress={saveUserInfo}>
        <Text style={styles.saveBtnText}>저장하기</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backBtnText}>뒤로가기</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutBtnText}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  imageBtn: {
    backgroundColor: theme.main,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  imageBtnText: {
    color: "#fff",
    fontWeight: "700",
  },
  deleteBtn: {
    marginTop: 20,
  },
  deleteBtnText: {
    color: "#dc3545",
    fontWeight: "700",
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 60,
    marginTop: 20,
    fontWeight: "900",
  },
  input: {
    width: "70%",
    height: 40,
    borderColor: "#ced4da",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  saveBtn: {
    backgroundColor: theme.main,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
  },
  saveBtnText: {
    color: "#fff",
    fontWeight: "900",
  },
  backBtn: {
    backgroundColor: "#6c757d",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  backBtnText: {
    color: "#fff",
    fontWeight: "900",
  },
  logoutBtn: {
    backgroundColor: "#dc3545",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  logoutBtnText: {
    color: "#fff",
    fontWeight: "900",
  },
});

export default UserInfo;
