import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from '../../constants/Colors'

const ToDoItemImg = props => {
  return (
    <View style={styles.imgContainer}>
      <Text>{props.imgURL}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    borderRightColor: Colors.primaryBlack,
    borderRightWidth: 4
  }
})
export default ToDoItemImg;
