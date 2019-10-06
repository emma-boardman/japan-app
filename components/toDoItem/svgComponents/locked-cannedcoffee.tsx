import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import Svg, { Path } from "react-native-svg";

const SVGLockedCoffee = props => {

  let opacityValue = new Animated.Value(0);

  Animated.timing(opacityValue, {
    toValue: 1,
    duration: 500
  }).start();

  return (
    <Animated.View style={[styles.container, { opacity: opacityValue}]}>
      <Svg viewBox="0 0 145 200" width="100%" height="100%">
        <Path
          d="M108.38 39.56h-72a4.44 4.44 0 0 0-4.5 4.35v2.79a4.08 4.08 0 0 0 .8 2.42l-8.12 19.3a27.37 27.37 0 0 0-1.86 9.19v110.05a9.55 9.55 0 0 0 1.36 4.9l6.47 10.79v2.38a3.94 3.94 0 0 0 .1.9 3.17 3.17 0 0 0 .12.44 4.67 4.67 0 0 0 4.47 3.18h74.33a3.9 3.9 0 0 0 .59 0h.16a2.59 2.59 0 0 0 .42-.09h.16a3.46 3.46 0 0 0 .54-.19l.16-.07.26-.13.18-.11.14-.09a4.46 4.46 0 0 0 .43-.33l.1-.09a4 4 0 0 0 .46-.46 4.51 4.51 0 0 0 .86-1.54 3.17 3.17 0 0 0 .12-.44 4.6 4.6 0 0 0 .09-.91v-2.45l6.47-10.8a9.5 9.5 0 0 0 1.37-4.89V76.92a2.27 2.27 0 0 0 0-.45v-.11a3.57 3.57 0 0 0 0-.46v-.09a5.05 5.05 0 0 0-.05-.52v-.04c0-.18 0-.36-.07-.54a33.36 33.36 0 0 0-.73-3.55l-.15-.53v-.08c0-.16-.1-.33-.15-.47v-.18l-.12-.36-.07-.21v-.06l-.08-.21q-.1-.27-.21-.51l-8.19-19.3a4.08 4.08 0 0 0 .8-2.42v-2.92a4.43 4.43 0 0 0-4.5-4.35z"
          fill="#6f6e6e"
        />
      </Svg>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    zIndex: 0,
    position: "absolute",
    top: 0,
    left: 0
  }
});

export default SVGLockedCoffee;
