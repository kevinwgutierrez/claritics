import React, { Component } from "react";
import { Alert, TouchableOpacity, StyleSheet, View } from "react-native";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import List from "./List";
import MainHome from "./MainHome";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { addData } from "../Data";
import { Button } from "react-native-elements";

export default class ButtonBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationFound: false,
      location: null,
      geocode: null,
      errorMessage: "",
      showText: true,
      loading: false
    };
    this.getGeocodeAsync = this.getGeocodeAsync.bind(this);
    this.getLocationAsync = this.getLocationAsync.bind(this);
    this.goToHomePage = this.goToHomePage.bind(this);
    this.getCandNews = this.getCandNews.bind(this);
  }

  componentDidMount() {
    this.getCandNews();
  }

  getCandNews() {
    fetch(
      "http://newsapi.org/v2/top-headlines?sources=fox-news,the-washington-times,breitbart-news&apiKey=9c76a13dd58b48ad94dad381323fbd4e&pageSize=5&q=trump"
    )
      .then(response => {
        // let json = JSON.parse(response);
        // console.log(json);
        return response.json();
        console.lo;
      })
      .then(json => {
        json.articles.forEach((article, i) => {
          addData(i, article);
          console.log(article);
        });
      });
  }

  goToHomePage() {
    this.props.navigation.navigate("MainMenu");
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }
    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest
    });
    const { latitude, longitude } = location.coords;
    this.getGeocodeAsync({ latitude, longitude });
    this.setState({ location: { latitude, longitude }, locationFound: true });
  };

  getGeocodeAsync = async location => {
    let geocode = await Location.reverseGeocodeAsync(location);
    this.setState({ geocode });
    let obj = {
      city: geocode[0].city,
      state: geocode[0].state,
      country: geocode[0].country
    };
    console.log(obj);
    console.log("location state: ", this.state.location);
    axios
      .get("http://192.168.1.71:6969/userLocation/", {
        params: {
          lat: this.state.location.latitude,
          long: this.state.location.longitude
        }
      })
      .then(response => {
        console.log("client response ", response);
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.locationFound) {
      return (
        <View style={styles.buttonContainer}>
          <Button onPress={this.goToHomePage} title="Welcome" color="blue" />
        </View>
      );
    } else if (!this.state.locationFound && this.state.loading) {
      return (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button title="Gathering Your Local Information..." />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          {/* <View style={styles.buttonContainer}>
            <Button onPress={this.fetchResources} title="Fetch Resources" />
          </View> */}
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => {
                this.setState({ loading: true });
                this.getLocationAsync();
              }}
              title="Allow Location"
            />
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
