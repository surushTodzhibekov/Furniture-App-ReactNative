import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

function Header(props) {
  return (
    <>
      <View style={{ width: "50%" }}>
        <Text style={styles.heading}>Furniture</Text>
      </View>
      <View style={{ width: "50%", alignItems: "flex-end" }}>
        <Image
          source={require("../images/bag-2.png")}
          style={styles.subImage}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: "montserrat-bold",
    fontSize: 22,
  },
  subImage: {
    width: 16,
    height: 20,
  },
});

export default Header;
