import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      backgroundColor: ""
    };
    this.handleNationalPress = this.handleNationalPress.bind(this);
    this.handleStatePress = this.handleStatePress.bind(this);
    this.handleLocalPress = this.handleLocalPress.bind(this);
  }
  handleNationalPress() {
    this.props.navigation.navigate("NationalMenu");
  }
  handleStatePress() {
    this.props.navigation.navigate("StateMenu");
  }
  handleLocalPress() {
    this.props.navigation.navigate("LocalMenu");
  }

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={style.topContainer}>
        <View style={style.header}>
          <Text style={style.welcome}>Welcome To Claritics</Text>
          <Text>Providing Clarity in Politics</Text>
        </View>
        <View style={style.cols}>
          <View style={style.col1}>
            <TouchableHighlight onPress={this.handleNationalPress}>
              <Text style={style.colHeaders}>National</Text>
            </TouchableHighlight>
          </View>
          <View style={style.col2}>
            <TouchableHighlight onPress={this.handleStatePress}>
              <Text style={style.colHeaders}>State</Text>
            </TouchableHighlight>
          </View>
          <View style={style.col3}>
            <TouchableHighlight onPress={this.handleLocalPress}>
              <Text style={style.colHeaders}>Local</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={style.footer}></View>
      </View>
    );
  }
}
const style = {
  colHeaders: {
    fontSize: 25,
    color: "rgb(247, 204, 116)"
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
    backgroundColor: "#B0AFAB"
  },
  //rgb(143, 140, 131)
  col2: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#d6d7da",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#B0AFAB"
  },
  col3: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#d6d7da",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#B0AFAB"
  },
  footer: {
    flex: 1
  }
};

{
  /* <View>
<Button
  title="Go to "
  onPress={() => navigation.navigate("List", { name: "List" })}
/>
</View> */
}
