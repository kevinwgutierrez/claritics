import { Component, React } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
const circleRadius = 30;
const windowWidth = window.innerWidth;

export default function Circle({ navigation }) {
  _touchX = new Animated.Value(windowWidth / 2 - circleRadius);
  _onPanGestureEvent = Animated.event([{ nativeEvent: { x: _touchX } }], {
    useNativeDriver: true
  });

  return (
    <PanGestureHandler onGestureEvent={_onPanGestureEvent}>
      <Animated.View
        style={{
          height: 150,
          justifyContent: "center"
        }}
      >
        <Animated.View
          style={[
            {
              backgroundColor: "#42a5f5",
              borderRadius: circleRadius,
              height: circleRadius * 2,
              width: circleRadius * 2
            },
            {
              transform: [
                {
                  translateX: Animated.add(
                    _touchX,
                    new Animated.Value(-circleRadius)
                  )
                }
              ]
            }
          ]}
        />
      </Animated.View>
    </PanGestureHandler>
  );
}
