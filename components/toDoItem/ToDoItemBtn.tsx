import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Svg, Circle, Polygon } from "react-native-svg";

const ToDoItemBtn = props => {
  return (
    <TouchableNativeFeedback onPress={props.showDescription}>
    <View style={styles.btnContainer}>
      <Svg style={styles.svg} height="10" width="10">
        <Circle
          cx="5"
          cy="5"
          r="4"
          stroke="white"
          stroke-width="5"
          fill="none"
        />
      </Svg>
      <Svg style={styles.svg} height="10" width="10">
        <Circle
          cx="5"
          cy="5"
          r="4"
          stroke="white"
          stroke-width="5"
          fill="none"
        />
      </Svg>
      <Svg style={styles.svg} height="10" width="10">
        <Circle
          cx="5"
          cy="5"
          r="4"
          stroke="white"
          stroke-width="5"
          fill="none"
        />
      </Svg>
      <Svg style={styles.svg} width="12" height="10">
        <Polygon points="0,0 12,0 6,10" fill="white" />
      </Svg>
    </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    paddingRight: 8,
    width: "100%",
    height: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    // alignItems: "flex-start"
  },
  svg: {
    marginLeft: 3
  }
});

export default ToDoItemBtn;
