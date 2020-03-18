import React from "react";
import { Button, Icon, List, ListItem } from "@ui-kitten/components";
import { StyleSheet, Text, View, Linking } from "react-native";
const data = new Array(8).fill({
  title: "Title for Item",
  description: "Description for Item"
});

export default function TopStories({ route, navigation }) {
  const renderItemAccessory = style => (
    <Button style={style}>LINK TO SITE</Button>
  );

  const renderItemIcon = style => <Icon {...style} name="person" />;

  const renderItem = ({ item, index }) => (
    <ListItem
      style={{ margin: 20 }}
      title={`Story From ${item.source.name}`}
      onPress={() => Linking.openURL(`${item.url}`)}
      description={`Article Description: \n${item.title}`}
      icon={renderItemIcon}
      accessory={renderItemAccessory}
    />
  );

  return <List data={route.params.news} renderItem={renderItem} />;
}
