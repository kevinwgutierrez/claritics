import React from "react";

import { BarChart, Grid } from "react-native-svg-charts";
import { Button, Icon, List, ListItem } from "@ui-kitten/components";
class BarChartExample extends React.PureComponent {
  render() {
    const fill = "rgb(134, 65, 244)";
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      null,
      85,
      undefined,
      0,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80
    ];
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

    return (
      <BarChart
        style={{ height: 200 }}
        data={data}
        svg={{ fill }}
        contentInset={{ top: 30, bottom: 30 }}
      >
        <Grid />
      </BarChart>
      <List data={route.params.info} renderItem={renderItem} />
    );
  }
}
export default BarChartExample;
