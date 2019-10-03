import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import Colors from "../../constants/Colors";
import Svg, { Path } from "react-native-svg";

const ToDoItemChkBox = props => {
  return (
    <TouchableNativeFeedback onPress={props.onValueChange}>
      <View style={styles.container}>
        {props.value && <Text>X</Text>

        //   <Svg viewBox="0 0 15 15" width="15" height="15">
        //   <Path d="M640 192L256 576 128 448 0 576l256 256 512-512L640 192z" />
        // </Svg>
        }
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryWhite,
    borderColor: Colors.primaryBlack,
    borderWidth: 3,
    width: 25,
    height: 25
  }
});

export default ToDoItemChkBox;
