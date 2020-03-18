import { React, Component } from "react";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import {
  StatusBar,
  FlatList,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
  Icon
} from "react-native";
import css from "./Styles";
import Swiper from "react-native-swiper";
import axios from "axios";
// import { data } from "./NewsData";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this._renderRow = this._renderRow.bind(this);
    this.renderArticles = this.renderArticles.bind(this);
  }
  _renderRow = ({ item, index }) => {
    const author = `${item.author}`;
    const title = `${item.title}`;
    const source = `${item.source.name}`;
    const link = `${item.url}`;
    let actualRowComponent = (
      <View style={css.home_screen_list.row}>
        <View style={css.home_screen_list.row_cell_timeplace}>
          <Text style={css.home_screen_list.row_time}>{author}</Text>
          <Text style={css.home_screen_list.row_place}>{title}</Text>
        </View>
        <Text style={css.home_screen_list.row_cell_temp}>{source}</Text>
      </View>
    );
    return actualRowComponent;
  };
  renderArticles() {
    return (
      <View>
        <StatusBar hidden={false} animated={true} barStyle={"light-content"} />
        <FlatList
          style={css.home_screen_list.container}
          data={this.props.data}
          renderItem={data => this._renderRow.bind(this, data)}
          extraData={this.state}
        />
      </View>
    );
  }

  render() {
    return <View>{this.renderArticles()}</View>;
  }
}
