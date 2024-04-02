import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { theme } from '../../../../styles/theme';

const data = [
  { label: '스포츠', value: '1' },
  { label: '일상', value: '2' },
  { label: '공부', value: '3' },
  { label: '문화생활', value: '4' },
  { label: '음식', value: '5' },
  { label: '취미', value: '6' },
  { label: '추김가서', value: '7' },
  { label: '참치찌개', value: '8' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={styles.dropdown}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="스포츠"
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