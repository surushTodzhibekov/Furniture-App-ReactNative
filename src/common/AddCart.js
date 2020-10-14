import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

function AddCart(props) {
  return (
    <>
      <Image
        source={require("../images/bag.png")}
        style={{ height: 20, width: 16 }}
      />
      <Text
        style={{
          fontSize: 20,
          color: "#FFF",
          fontFamily: "montserrat-bold",
          marginHorizontal: 15,
        }}
      >
        Add to Cart
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AddCart;
