import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { theme } from "../../../../styles/theme";

export const ReportChart = () => {
  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: ["월", "화", "수", "목", "금", "토", "일"],
    datasets: [
      {
        data: [1, 3, 4, 2, 5, 2, 1, 7],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 0, // 소수점 아래 자릿수
    color: (opacity = 1) => `rgba(0, 133, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.5,
    barRadius: 2,
    useShadowColorFromDataset: false,
  };

  return (
    <View style={{ marginLeft: -10 }}>
      <BarChart
        data={data}
        width={280}
        height={230}
        yAxisLabel="😊"
        chartConfig={chartConfig}
        withInnerLines={false}
        showBarTops={false}
        fromZero={true}
        yLabelsOffset={18}
      />
    </View>
  );
};
