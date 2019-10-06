import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ToDoItemText = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 16
  }
})

export default ToDoItemText;
