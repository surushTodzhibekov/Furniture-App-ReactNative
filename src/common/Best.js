import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";

function Best(props) {
  return (
    <ImageBackground
      source={require("../images/lr.png")}
      style={styles.container}
    >
      <Text
        style={{ fontFamily: "montserrat-bold", fontSize: 15, color: "#fff" }}
      >
        Zara Furniture World
      </Text>
      <Text
        style={{ fontFamily: "montserrat-bold", fontSize: 15, color: "#fff" }}
      >
        Get 25% OFF
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 130,
    borderRadius: 10,
    marginBottom: 40,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 3,
    backgroundColor: "#000",
    opacity: 0.7,
    padding: 12,
  },
});

export default Best;
