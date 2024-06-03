import React from "react";
import { Dimensions, View } from "react-native";
import { BarChart } from "react-native-chart-kit";

export const ReportChart = ({ data, barPercentage, verticalLabelRotation }) => {
  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    // decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 133, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: barPercentage || 0.5,
    barRadius: 2,
    useShadowColorFromDataset: false,
    propsForLabels: {
      // rotation: 45, // Rotate labels
      translateX: -10, // Adjust label position to prevent clipping
    },
  };

  return (
    <View style={{ marginLeft: -10 }}>
      <BarChart
        data={data}
        width={300}
        height={230}
        yAxisLabel="😊"
        chartConfig={chartConfig}
        withInnerLines={false}
        showBarTops={false}
        fromZero={true}
        // yLabelsOffset={18}
        verticalLabelRotation={verticalLabelRotation || 0}
      />
    </View>
  );
};
