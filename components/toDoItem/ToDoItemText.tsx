import React from "react";
import { View, Text } from "react-native";

const ToDoItemText = props => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

export default ToDoItemText;
