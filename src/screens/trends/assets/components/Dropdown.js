import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const CustomDropdown = ({
  selectedValue,
  onValueChange,
  items,
  placeholder,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(selectedValue);
  const [dropdownItems, setItems] = useState(items);

  return (
    <DropDownPicker
      listMode="SCROLLVIEW"
      open={open}
      value={value}
      items={dropdownItems}
      setOpen={setOpen}
      setValue={(callback) => {
        setValue(callback);
        onValueChange(callback);
      }}
      setItems={setItems}
      containerStyle={{
        width: 100,
        padding: 1,
      }}
      style={{
        borderColor: "#ccc",
        minHeight: 35,
      }}
      dropDownContainerStyle={{
        backgroundColor: "#fafafa",
        borderColor: "#ccc",
      }}
      placeholder={placeholder}
      placeholderStyle={{
        color: "#ccc",
      }}
      onSelectItem={(item) => onValueChange(item.value)}
    />
  );
};

export default CustomDropdown;
