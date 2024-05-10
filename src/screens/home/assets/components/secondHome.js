import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  HomeText,
  BackImage,
  SecondHomeTextView,
  CategoryText,
  SearchText,
  BackBtn,
  SecondInput,
  SearchBtn,
  ActivityBtn,
  SearchView,
} from "../../../../styles/styles";
import { useRecoilValue } from "recoil";
import { ActivityState } from "../../../../common/recoil/atoms";
import backicon from "../images/back.png";
import searchicon from "../images/search.png";
import ModalScreen from "./modal";
import { categorykData } from "../../../../common/data/category";
import { useRecoilState } from "recoil";
import { Dimensions } from "react-native";
import { getActivities } from "../apis/getActivity";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SecondHome = ({ SecondonActivitySave }) => {
  const navigation = useNavigation();
  const [activitystate, setActivityState] = useRecoilState(ActivityState);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);

  const categories = categorykData.categories.map((cat) => ({
    name: cat.name,
    activities: Array.from(
      { length: Math.ceil(cat.activities.length / 3) },
      (_, index) =>
        cat.activities.slice(index * 3, index * 3 + 3).map((act) => ({
          id: act.id,
          name: act.name,
          emoji: act.emoji,
        }))
    ),
  }));

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const press = (activityId) => {
    setActivityState(activityId);
    SecondsaveActivity();
  };
  const SecondsaveActivity = () => {
    SecondonActivitySave();
  };

  const BasicRender = () => {
    return (
      <View style={{ marginBottom: 10 }}>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          pagingEnabled
        >
          {categories.map((category, index) => (
            <View key={index} style={{ width: windowWidth }}>
              <CategoryText>{category.name}</CategoryText>
              <View style={{ flex: 1, alignItems: "center" }}>
                <ScrollView
                  contentContainerStyle={{ marginVertical: 10 }}
                  style={{
                    maxWidth: windowWidth,
                    maxHeight: windowHeight * 0.6,
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: 10,
                  }}
                >
                  {category.activities.map((activityGroup, groupIndex) => (
                    <View key={groupIndex} style={{ flexDirection: "row" }}>
                      {activityGroup.map((activity, activityIndex) => (
                        <ActivityBtn
                          key={activityIndex}
                          onPress={() => press(activity.id)}
                        >
                          <Text>{activity.emoji}</Text>
                          <Text>{activity.name}</Text>
                        </ActivityBtn>
                      ))}
                    </View>
                  ))}
                </ScrollView>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  const SearchRender = () => {
    console.log(filteredCategories);
    return (
      <View style={{ marginStart: 30, marginBottom: 10 }}>
        {/* <ScrollView> */}
        <SearchView>
          {filteredCategories.map((activity, activityIndex) => (
            <ActivityBtn key={activityIndex} onPress={() => press(activity.id)}>
              <Text>{activity.emoji}</Text>
              <Text>{activity.name}</Text>
            </ActivityBtn>
          ))}
        </SearchView>
        {/* </ScrollView> */}
      </View>
    );
  };

  useEffect(() => {
    const newFilteredActivities = categorykData.categories.flatMap((cat) => {
      return cat.activities
        .filter((activity) => {
          return activity.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        })
        .map((activity) => ({
          id: activity.id,
          name: activity.name,
          emoji: activity.emoji,
        }));
    });
    setFilteredCategories(newFilteredActivities);
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(query);
  };

  return (
    <View>
      <BackBtn>
        <BackImage source={backicon} />
      </BackBtn>

      <SecondHomeTextView>
        <HomeText>무엇을 하고 있었나요?</HomeText>
        <SecondInput
          placeholder="카테고리 또는 활동을 검색하세요"
          style={{ marginTop: 30 }}
          onChangeText={handleSearch}
        />
        <SearchBtn onPress={toggleModal}>
          <SearchText>+ 활동 추가하기</SearchText>
        </SearchBtn>
        {searchQuery ? <SearchRender /> : <BasicRender />}
      </SecondHomeTextView>
      <Modal visible={isModalVisible} animationType="fade" transparent={true}>
        <ModalScreen onClose={toggleModal} />
      </Modal>
    </View>
  );
};

export default SecondHome;
