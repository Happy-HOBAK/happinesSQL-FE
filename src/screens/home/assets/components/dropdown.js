import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { theme } from '../../../../styles/theme';
import { categorykData } from '../../../../common/data/category';

const DropdownComponent = () => {
  const categoryNames = categorykData.categories.map(category => category.name);

  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={styles.dropdown}
      data={categoryNames.map((name, index) => ({ label: name, value: index.toString() }))}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="취미 및 여가활동"
      searchPlaceholder="검색하기"
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 45,
    width:200,
    borderBottomColor: theme.grey_2,
  },
});
