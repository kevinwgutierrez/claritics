import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class BernieScreen extends Component {
  constructor(props) {
    super(props);

    this.handleCandNewsPress = this.handleCandNewsPress.bind(this);
    this.handleFundingPress = this.handleFundingPress.bind(this);
  }
  handleCandNewsPress() {
    this.props.navigation.navigate("News");
  }

  handleFundingPress() {
    this.props.navigation.navigate("Bar Chart");
  }

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={style.topContainer}>
        <View style={style.header}>
          <Text style={style.welcome}>Bernie Sanders</Text>
          <Text style={style.subheading}>Senator</Text>
          <Text>2020 Presidential Candidate</Text>
        </View>
        <View style={style.cols}>
          <View style={style.col1}>
            <TouchableOpacity onPress={this.handleCandNewsPress}>
              <Text style={style.colHeaders}>News</Text>
            </TouchableOpacity>
          </View>
          <View style={style.col2}>
            <TouchableOpacity>
              <Text style={style.colHeaders}>Views/Positions</Text>
            </TouchableOpacity>
          </View>
          <View style={style.col3}>
            <TouchableOpacity onPress={this.handleFundingPress}>
              <Text style={style.colHeaders}>
                Contributions & Sources of Funding
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.footer}></View>
      </View>
    );
  }
}
const style = {
  subheading: {
    fontSize: 15
  },
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
    backgroundColor: "powderblue"
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
  footer: {
    flex: 1
  }
};
