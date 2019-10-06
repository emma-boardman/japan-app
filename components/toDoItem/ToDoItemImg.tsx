import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path, G } from "react-native-svg";
import SVGBars from '../../assets/svg/bars';
import SVGLockedCoffee from '../../assets/svg/locked-cannedcoffee';
import SVGUnlockedCoffee from '../../assets/svg/unlocked-cannedcoffee';


import Colors from "../../constants/Colors";

const ToDoItemImg = props => {
  return (
    <View
      style={[styles.imgContainer, props.isOddRow && styles.imgContainerRowOdd]}
    >
   
    <SVGLockedCoffee style={styles.object} />
    <SVGUnlockedCoffee style={styles.objectUnlocked} />
    <SVGBars style={styles.bars}/>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    borderRightColor: Colors.primaryBlack,
    borderRightWidth: 4,
    width: '100%',
    height: '100%'
  },
  imgContainerRowOdd: {
    borderLeftColor: Colors.primaryBlack,
    borderLeftWidth: 4,
    borderRightWidth: 0
  }
});
export default ToDoItemImg;
