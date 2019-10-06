import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Easing, Button } from "react-native";
import Svg, { Path, G } from "react-native-svg";

import Colors from "../../../constants/Colors";

const SVGbars = props => {
  const propsCopy = Object.assign({}, props);
  let completeCopy = propsCopy.complete;
  const firstUpdate = useRef(true);
  let transformValue = new Animated.Value(0);
  let transformStyle = { transform: [{ translateX: transformValue }] };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      if (!props.isOddRow) {
        Animated.stagger(300, [
          Animated.timing(transformValue, {
            toValue: -200,
            duration: 800,
            easing: Easing.linear,
            useNativeDriver: true
          }),
          Animated.timing(transformValue, {
            toValue: 0,
            duration: 800,
            easing: Easing.linear,
            useNativeDriver: true
          })
        ]).start();
      } else {
        Animated.stagger(300, [
          Animated.timing(transformValue, {
            toValue: 200,
            duration: 800,
            easing: Easing.linear,
            useNativeDriver: true
          }),
          Animated.timing(transformValue, {
            toValue: 0,
            duration: 800,
            easing: Easing.linear,
            useNativeDriver: true
          })
        ]).start();
      }
    }
  }, [completeCopy]);


  return (
    <Animated.View style={[styles.container, transformStyle]}>
        <Svg viewBox="-6 0 100 130" width="100%" height="100%">
          <G fill="none" stroke={Colors.primaryBlack} strokeWidth="4">
            <Path id="path1" d="M2 0 l0 250" />
            <Path id="path2" d="M14 0 l0 250" />
            <Path id="path3" d="M26 0 l0 250" />
            <Path id="path4" d="M38.13.46l0 250" />
            <Path id="path5" d="M50.74.01l0 250" />
            <Path id="path6" d="M62.36.01l-.73 250" />
            <Path id="path7" d="M74.49.01l-.73 250" />
            <Path id="path8" d="M86.9.01l-.73 250" />
            <Path id="path9" d="M98.9.01l-.73 250" />
            <Path id="path10" d="M106.9.01l-.73 250" />
            <Path id="path11" d="M118.9.01l-.73 250" />
            <Path id="path12" d="M130.9.01l-.73 250" />
          </G>
        </Svg>
      </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 3
  }
});

export default SVGbars;
