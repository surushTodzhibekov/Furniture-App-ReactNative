import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper";

function SwiperComponent() {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={{
        backgroundColor: "#000",
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10,
        width: 10,
        height: 10,
      }}
      activeDotColor="#FFF"
      activeDotStyle={{
        borderColor: "#000",
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
    >
      <View style={styles.slide}>
        <Image source={require("../images/unnamed.png")} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={require("../images/unnamed.png")} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={require("../images/unnamed.png")} style={styles.image} />
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 300,
    width: 300,
  },
});

export default SwiperComponent;
