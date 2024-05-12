import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Modal, Dimensions } from "react-native";
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
import { useRecoilState } from "recoil";
import { ActivityState } from "../../../../common/recoil/atoms";
import backicon from "../images/back.png";
import ModalScreen from "./modal";
import { getActivities } from "../apis/getActivity";
import { getSearch } from "../apis/getSearch";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SecondHome = ({ SecondonActivitySave }) => {
  const navigation = useNavigation();
  const [activitystate, setActivityState] = useRecoilState(ActivityState);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState({
    success: true,
    categories: [],
  });
  const [categories, setCategories] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const chunkArray = (array, size) => {
    const chunked_arr = [];
    for (let i = 0; i < array.length; i += size) {
      chunked_arr.push(array.slice(i, i + size));
    }
    return chunked_arr;
  };

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await getActivities();
        if (response.success && response.data && response.data.categories) {
          const formattedCategories = response.data.categories.map((cat) => ({
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
          setCategories(formattedCategories);
        }
      } catch (error) {
        console.error("Failed to fetch activities:", error);
      }
    };

    fetchActivities();
  }, []);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.length > 0) {
        try {
          const response = await getSearch(searchQuery);
          if (response && response.data && response.data.success) {
            setSearchResults({
              success: response.data.success,
              categories: response.data.data.categories || [],
            });
          } else {
            setSearchResults({ success: false, categories: [] });
          }
        } catch (error) {
          console.error("Failed to fetch search results:", error);
          setSearchResults({ success: false, categories: [] });
        }
      } else {
        setSearchResults({ success: false, categories: [] });
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const press = (activityId) => {
    setActivityState(activityId);
    SecondonActivitySave();
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
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
    console.log(searchResults);
    if (!searchResults.success || searchResults.categories.length === 0) {
      return (
        <View style={{ marginStart: 30, marginBottom: 10 }}>
          <Text>검색 결과가 없습니다.</Text>
        </View>
      );
    }

    return (
      <View style={{ marginBottom: 10 }}>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          pagingEnabled
        >
          {searchResults.categories.map((category, index) => (
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
                  {chunkArray(category.activities, 3).map(
                    (activityGroup, groupIndex) => (
                      <View
                        key={groupIndex}
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-around",
                        }}
                      >
                        {activityGroup.map((activity, activityIndex) => (
                          <ActivityBtn
                            key={activityIndex}
                            onPress={() => press(activity.id)}
                          >
                            <Text style={{ textAlign: "center", fontSize: 16 }}>
                              {activity.emoji}
                            </Text>
                            <Text style={{ textAlign: "center", fontSize: 14 }}>
                              {activity.name}
                            </Text>
                          </ActivityBtn>
                        ))}
                      </View>
                    )
                  )}
                </ScrollView>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
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
