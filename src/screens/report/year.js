import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import {
  ReportBox,
  DataeBtn,
  DataText,
  SecondReportBox,
  FirstReportBox,
  ActivityReportBox,
  GraphReportBox,
  MapReportBox,
} from "../../styles/styles";
import { ReportChart } from "./assets/components/reportGraph";
import {
  FocusText,
  ImojiText,
  LeftText,
  NumText,
  NumtitleText,
  SubTitleText,
  TitleText,
  CriteriaButton,
  CriteriaButtonText,
  UserText,
} from "./report.style";
import {
  getYearActivities,
  getYearGraph,
  getYearHappiness,
  getYearLocation,
  getYearSummary,
} from "./assets/apis/getReports";

export const ReportYear = ({ handleDataBtnPress, setModalVisible }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    happiness: null,
    summary: null,
    activities: null,
    locations: null,
    graph: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          happinessData,
          summaryData,
          activityData,
          locationData,
          graphData,
        ] = await Promise.all([
          getYearHappiness(),
          getYearSummary(),
          getYearActivities(),
          getYearLocation(),
          getYearGraph(),
        ]);

        setData({
          happiness: happinessData,
          summary: summaryData,
          activities: activityData,
          locations: locationData,
          graph: graphData,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView>
      <ReportBox>
        <UserText>3님의</UserText>
        <LeftText>평균 행복지수는</LeftText>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {data.happiness ? (
            <FocusText>{data.happiness.data.level}</FocusText>
          ) : (
            <></>
          )}
          <LeftText>이에요</LeftText>
          {data.happiness ? (
            <FocusText>{data.happiness.data.emoji}</FocusText>
          ) : (
            <></>
          )}
        </View>
        <CriteriaButton onPress={() => setModalVisible(true)}>
          <CriteriaButtonText>기준이 궁금해요!</CriteriaButtonText>
        </CriteriaButton>
      </ReportBox>

      <FirstReportBox>
        <UserText>호박 님은</UserText>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {data.summary ? (
            <FocusText>{data.summary.data.time_of_day}</FocusText>
          ) : (
            <></>
          )}
          <LeftText>에</LeftText>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {data.summary ? (
            <FocusText>{data.summary.data.location}</FocusText>
          ) : (
            <></>
          )}
          <LeftText>에서</LeftText>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {data.summary ? (
            <FocusText>{data.summary.data.activity}</FocusText>
          ) : (
            <></>
          )}
          <LeftText>을 할 때</LeftText>
        </View>
        <LeftText>가장 행복했어요</LeftText>
        <DataeBtn onPress={handleDataBtnPress}>
          <DataText>전체 데이터 보기</DataText>
        </DataeBtn>
      </FirstReportBox>

      <ActivityReportBox>
        <TitleText>행복한 활동 BEST 3</TitleText>
        <SubTitleText>호박 님은 이런 활동을 할 때 행복하군요!</SubTitleText>
        {data.activities && data.activities.data ? (
          data.activities.data.map((activity, index) => (
            <SecondReportBox key={index}>
              <NumText>{activity.ranking}</NumText>
              <NumtitleText>{activity.activity}</NumtitleText>
              <ImojiText>{activity.emoji}</ImojiText>
            </SecondReportBox>
          ))
        ) : (
          <></>
        )}
      </ActivityReportBox>

      <GraphReportBox>
        <TitleText>행복 그래프</TitleText>
        <SubTitleText>호박 님의 행복 지수 추이를 분석해봤어요!</SubTitleText>
        {data.graph && data.graph.data ? (
          <ReportChart
            data={{
              labels: data.graph.data.labels,
              datasets: [
                {
                  data: data.graph.data.happiness,
                },
              ],
            }}
            barPercentage={0.3}
            verticalLabelRotation={45}
          />
        ) : (
          <></>
        )}
      </GraphReportBox>

      <MapReportBox>
        <TitleText>행복했던 장소 BEST 3</TitleText>
        <SubTitleText>호박 님은 이런 장소에서 행복했어요</SubTitleText>
        {data.locations && data.locations.data ? (
          data.locations.data.map((location, index) => (
            <SecondReportBox key={index}>
              <NumText>{location.ranking}</NumText>
              <NumtitleText>{location.location}</NumtitleText>
            </SecondReportBox>
          ))
        ) : (
          <></>
        )}
      </MapReportBox>
      <View style={{ height: 200 }} />
    </ScrollView>
  );
};
