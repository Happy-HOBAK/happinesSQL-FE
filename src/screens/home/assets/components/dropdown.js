// import React, { useState } from "react";
// import { StyleSheet } from "react-native";
// import { Dropdown } from "react-native-element-dropdown";
// import { theme } from "../../../../styles/theme";
// import { categorykData } from "../../../../common/data/category";

// const DropdownComponent = ({ onSelectCategory }) => {
//   const categoryNames = categorykData.categories.map(
//     (category) => category.name
//   );

//   const handleSelectCategory = (item) => {
//     setValue(item.value);
//     onSelectCategory(item.value);
//   };

//   const [value, setValue] = useState(null);
//   //console.log(value);

//   return (
//     <Dropdown
//       style={styles.dropdown}
//       data={categoryNames.map((name, index) => ({ label: name, value: index }))}
//       search
//       maxHeight={300}
//       labelField="label"
//       valueField="value"
//       placeholder="취미 및 여가 활동"
//       searchPlaceholder="검색하기"
//       value={value}
//       onChange={handleSelectCategory}
//     />
//   );
// };

// export default DropdownComponent;

// const styles = StyleSheet.create({
//   dropdown: {
//     margin: 16,
//     height: 45,
//     width: 200,
//     borderBottomColor: theme.grey_2,
//   },
// });
