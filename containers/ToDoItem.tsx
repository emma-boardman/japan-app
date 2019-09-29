import React from "react";
import { View, Text, StyleSheet, CheckBox } from "react-native";

import ToDoItemImg from "../components/toDoItem/ToDoItemImg";
import ToDoItemBtn from "../components/toDoItem/ToDoItemBtn";
import ToDoItemChkBox from "../components/toDoItem/ToDoItemChkBox";
import ToDoItemDescription from "../components/toDoItem/ToDoItemDescription";
import ToDoItemText from "../components/toDoItem/ToDoItemText";

const ToDoItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <ToDoItemImg style={styles.imgCol} imgURL={props.imgURL} />
        <View style={styles.contentCol}>
          <View style={styles.contentTextRow}>
            <ToDoItemText title={props.title} />
            {/* <ToDoItemChkBox complete={props.complete} /> */}
            <CheckBox value={props.completed} onValueChange={props.onToggle.bind(this, props.id)} />
          </View>
          <View style={StyleSheet.contentButtonRow} />
          <ToDoItemBtn />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    width: '100%'
  },
  imgCol: {
    width: '30%'
  },
  contentCol: {
    width: '70%'
  },
  contentTextRow: {
    flexDirection: 'row'
  }
});
export default ToDoItem;
