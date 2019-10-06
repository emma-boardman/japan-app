import React from "react";
import { View, StyleSheet} from "react-native";
import SVGBars from "../components/toDoItem/svgComponents/bars";
import SVGLockedCoffee from "../components/toDoItem/svgComponents/locked-cannedcoffee";
import SVGUnlockedCoffee from "../components/toDoItem/svgComponents/unlocked-cannedcoffee";

import Colors from "../constants/Colors";

const ToDoItemImg = props => {
  return (
    <View
      style={[styles.imgContainer, props.isOddRow && styles.imgContainerRowOdd]}
    >
      <SVGBars
        complete={props.complete}
        isOddRow={props.isOddRow}
      />
      {props.complete ? <SVGUnlockedCoffee /> : <SVGLockedCoffee />}
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    borderRightColor: Colors.primaryBlack,
    borderRightWidth: 4,
    width: "100%",
    height: "100%",
    position: "relative"
  },
  imgContainerRowOdd: {
    borderLeftColor: Colors.primaryBlack,
    borderLeftWidth: 4,
    borderRightWidth: 0
  }
});
export default ToDoItemImg;
