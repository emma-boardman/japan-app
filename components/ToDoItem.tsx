import React from "react";
import { View, Text, StyleSheet, CheckBox } from "react-native";

const ToDoItem = props => {
  return (
    <View>
      <Text>{props.text} {props.id}</Text>
      <CheckBox value={props.completed} onValueChange={props.onToggle.bind(this, props.id)}/>
      <Text>{props.completed.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ToDoItem;
