import React from "react";
import { View, Text, StyleSheet, CheckBox } from "react-native";

import ToDoItemImg from "../components/toDoItem/ToDoItemImg";
import ToDoItemBtn from "../components/toDoItem/ToDoItemBtn";
import ToDoItemChkBox from "../components/toDoItem/ToDoItemChkBox";
import ToDoItemDescription from "../components/toDoItem/ToDoItemDescription";
import ToDoItemText from "../components/toDoItem/ToDoItemText";

import Colors from "../constants/Colors";

const ToDoItem = props => {

  return (
    <View style={styles.container}>
      <View
        style={[styles.containerRow, props.isOddRow && styles.containerRowOdd, props.complete && styles.containerRowComplete]}
      >
        <ToDoItemImg imgURL={props.imgURL} isOddRow={props.isOddRow}/>
        <View style={styles.contentCol}>
          <View style={styles.contentLeftCol}>
            <View style={StyleSheet.contentColRow}>
              <ToDoItemText title={props.title} />
            </View>
            <View style={StyleSheet.contentColRow}>
              <ToDoItemBtn />
            </View>
          </View>
          {/* <ToDoItemChkBox complete={props.complete} /> */}
          <View style={styles.contentRightCol}>
            <View style={StyleSheet.contentColRow}>
              {/* <CheckBox
                style={styles.checkBox}
                value={props.complete}
                onValueChange={props.onToggle.bind(this, props.id)}
              /> */}
              <Text>{props.complete.toString()}</Text>
            </View>
            <View style={StyleSheet.contentColRow}>
              <Text></Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: "row",
    width: "100%",
    borderBottomColor: Colors.primaryBlack,
    borderBottomWidth: 8,
    paddingHorizontal: 10,
    backgroundColor: Colors.primaryBeige,
    flex: 3,
    flexShrink: 3
  },
  containerRowComplete: {
    backgroundColor: Colors.primaryGold
  },
  containerRowOdd: {
    flexDirection: "row-reverse"
  },
  contentCol: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
    flex: 7
  },
  contentLeftCol: {
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 3
  },
  contentRightCol: {
    justifyContent: "center",
    flex: 1
  },
  contentColRow: {
    flex: 1,
    flexShrink: 1
  }
});
export default ToDoItem;
