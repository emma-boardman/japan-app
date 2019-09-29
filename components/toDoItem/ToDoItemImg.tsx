import React from "react";
import { View, Text } from "react-native";

const ToDoItemImg = props => {
  return (
    <View>
      <Text>{props.imgURL}</Text>
    </View>
  );
};

export default ToDoItemImg;
