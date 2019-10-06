import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import ToDoItemImg from "./ToDoItemImg";
import ToDoItemBtn from "../components/toDoItem/ToDoItemBtn";
import ToDoItemChkBox from "../components/toDoItem/ToDoItemChkBox";
import ToDoItemDescription from "../components/toDoItem/ToDoItemDescription";
import ToDoItemText from "../components/toDoItem/ToDoItemText";

import Colors from "../constants/Colors";

const ToDoItem = props => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.containerRow,
          props.isOddRow && styles.containerRowOdd,
          props.complete && styles.containerRowComplete
        ]}
      >
        <View style={styles.imgCol}>
          <ToDoItemImg
            imgURL={props.imgURL}
            isOddRow={props.isOddRow}
            complete={props.complete}
          />
        </View>
        <View style={styles.contentCol}>
          <View style={styles.contentLeftCol}>
            <View style={styles.contentColRow}>
              <ToDoItemText title={props.title} />
            </View>
            <View style={styles.contentColRow}>
              <ToDoItemBtn
                style={styles.contentDescBtn}
                showDescription={() => {
                  setShowDescription(!showDescription);
                }}
              />
            </View>
          </View>
          <View style={styles.contentRightCol}>
            <View style={styles.contentColRow}>
              <ToDoItemChkBox
                style={styles.checkBox}
                value={props.complete}
                onValueChange={props.onToggle.bind(this, props.id)}
              />
            </View>
            <View style={styles.contentColRow}>
              <Text></Text>
            </View>
          </View>
        </View>
      </View>

      {showDescription && (
        <ToDoItemDescription
          why={props.descriptionWhy}
          where={props.descriptionWhere}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: "row",
    width: "100%",
    height: Dimensions.get("window").height / 5.5,
    borderBottomColor: Colors.primaryBlack,
    borderBottomWidth: 8,
    backgroundColor: Colors.primaryBeige,
    flex: 1
  },
  containerRowComplete: {
    backgroundColor: Colors.primaryGold
  },
  containerRowOdd: {
    flexDirection: "row-reverse"
  },
  imgCol: {
    width: Dimensions.get("window").width / 4
  },
  contentCol: {
    flexDirection: "row",
    paddingHorizontal: 10,
    width: (Dimensions.get("window").width / 4) * 3
  },
  contentLeftCol: {
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    padding: 10
  },
  contentRightCol: {
    alignItems: "center",
    justifyContent: "center",
    width: "15%"
  }
});
export default ToDoItem;
