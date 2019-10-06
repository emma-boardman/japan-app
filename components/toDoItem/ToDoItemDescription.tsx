import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const ToDoItemDescription = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why?</Text>
      <Text style={styles.content}>{props.why}</Text>
      <Text style={styles.title}>Where?</Text>
      <Text style={styles.content}>{props.why}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
  width: "100%",
  borderColor: Colors.primaryBlack,
  borderWidth: 8,
  borderTopWidth: 0,
  padding: 10
 },
 title: {
   fontSize: 24,
   padding: 5
 },
 content: {
   fontSize: 16,
   padding:5,
   marginBottom: 4
 }
})

export default ToDoItemDescription;
