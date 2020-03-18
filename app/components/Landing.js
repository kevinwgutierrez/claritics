import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeButtons from "./HomeButtons";
import LottieView from "lottie-react-native";

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ color: "#f7cc74", fontSize: 60 }}>claritics</Text>
      </View>
      <View style={styles.lottie}>
        <LottieView
          autoplay={true}
          autoPlay={true}
          loop={true}
          source={require("../assets/globe.json")}
        />
      </View>
      <View style={styles.button}>
        <HomeButtons navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  lottie: {
    flex: 2,
    width: 800,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  }
});
