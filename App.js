import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6600",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper}>
        <View style={styles.slide}>
          <Text style={styles.text}>Board 1</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Board 2</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Board 3</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Board 4</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Board 5</Text>
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);
