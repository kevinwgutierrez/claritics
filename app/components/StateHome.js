import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
export default function StateHome({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("List", { name: "List" })}
      />
    </View>
  );
}
