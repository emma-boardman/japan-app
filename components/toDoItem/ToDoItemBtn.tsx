import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ToDoItemBtn = props => {
  return (
    <View style={styles.btnContainer}>
      <Text>...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignSelf: 'center'
  }
})

export default ToDoItemBtn;
