import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class PresCandidates extends Component {
  constructor(props) {
    super(props);
    this.handleTrumpPress = this.handleTrumpPress.bind(this);
  }

  handlePress() {
    this.props.navigation.navigate("National");
  }
  handleTrumpPress() {
    this.props.navigation.navigate("Candidate Screen");
  }
  handleBerniePress() {
    this.props.navigation.navigate("Bernie Screen");
  }

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={style.topContainer}>
        <View style={style.header}>
          <Text style={style.welcome}>United States</Text>
          <Text>Presidential Candidates</Text>
        </View>
        <View style={style.cols}>
          <View style={style.col1}>
            <TouchableOpacity onPress={this.handleTrumpPress}>
              <Text style={style.colHeaders}>President Trump</Text>
            </TouchableOpacity>
          </View>
          <View style={style.col2}>
            <TouchableOpacity onPress={this.handleBerniePress}>
              <Text style={style.colHeaders}>Bernie Sanders</Text>
            </TouchableOpacity>
          </View>
          <View style={style.col3}>
            <TouchableOpacity onPress={this.handlePress}>
              <Text style={style.colHeaders}>Mike Bloomberg</Text>
            </TouchableOpacity>
          </View>
          <View style={style.col2}>
            <TouchableOpacity onPress={this.handlePress}>
              <Text style={style.colHeaders}>Tulsi Gabbard</Text>
            </TouchableOpacity>
          </View>
          <View style={style.col4}>
            <TouchableOpacity onPress={this.handlePress}>
              <Text style={style.colHeaders}>Joe Biden</Text>
            </TouchableOpacity>
          </View>
          <View style={style.col5}>
            <TouchableOpacity onPress={this.handlePress}>
              <Text style={style.colHeaders}>Elizabeth Warren</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.footer}></View>
      </View>
    );
  }
}
const style = {
  colHeaders: {
    fontSize: 25
  },
  welcome: {
    fontSize: 35,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  topContainer: {
    flex: 6
  },
  cols: {
    flex: 2
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white"
  },
  col1: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#d6d7da",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#9C3B3B"
  },
  col2: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#d6d7da",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "skyblue"
  },
  col3: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#d6d7da",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "steelblue"
  },
  col4: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#d6d7da",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "powderblue"
  },
  col5: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#d6d7da",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "steelblue"
  },
  footer: {
    flex: 1
  }
};
