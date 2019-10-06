import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, G } from "react-native-svg";

import Colors from "../../constants/Colors";

const SVGbars = props => {
  return (
    <View style={styles.container}>
      <Svg viewBox="-6 0 100 130" width="100%" height="100%">
        <G fill="none" stroke={Colors.primaryBlack} strokeWidth="4">
          <Path id="path1" d="M2.00.25l-.0 150"/>
          <Path id="path2" d="M14.06.01l-.73 250" />
          <Path id="path3" d="M26.09.01l-.73 250" />
          <Path id="path4" d="M38.13.46l-.73 250" />
          <Path id="path5" d="M50.74.01l-.73 250" />
          <Path id="path6" d="M62.36.01l-.73 250"/>
          <Path id="path7" d="M74.49.01l-.73 250" />
          <Path id="path8" d="M86.9.01l-.73 250" />
          <Path id="path9" d="M98.9.01l-.73 250" />
          <Path id="path10" d="M106.9.01l-.73 250" />
          <Path id="path11" d="M118.9.01l-.73 250" />
          <Path id="path12" d="M130.9.01l-.73 250" />
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        zIndex: 3,
        position: "absolute",
        top: 0,
        left: 0
    },
    
})

export default SVGbars;
