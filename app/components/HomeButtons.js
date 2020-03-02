import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import List from "./List";
import MainHome from "./MainHome";

export default class ButtonBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationFound: false,
      isPasswordHidden: true,
      showText: true
    };
    this.goToHomePage = this.goToHomePage.bind(this);
    this.fetchLocation = this.fetchLocation.bind(this);
  }

  goToHomePage() {
    alert("Next page! ... wait where it at tho");
    this.props.navigation.navigate("Home");
  }
  fetchLocation() {
    this.setState({
      showText: !this.state.showText,
      locationFound: !this.state.locationFound
    });
  }

  render() {
    if (this.state.locationFound) {
      return (
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.goToHomePage}
            title="Seek Clarity"
            color="blue"
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button onPress={this.fetchLocation} title="Allow Location" />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 17
  }
});
