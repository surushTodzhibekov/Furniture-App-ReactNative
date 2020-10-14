import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Couches({ onPress, source, name }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={source} style={styles.image} />
      <View style={styles.subContainer}>
        <Text style={styles.text}>{name}</Text>
        <View
          style={{
            height: 4,
            width: 4,
            borderRadius: 4,
            backgroundColor: "red",
            marginHorizontal: 4,
          }}
        ></View>
        <Text
          style={{ color: "red", fontSize: 9, fontFamily: "montserrat-bold" }}
        >
          New
        </Text>
      </View>
      <Text
        style={{
          fontSize: 9,
          fontFamily: "Montserrat-regular",
          color: "#4f4a4a",
        }}
      >
        Full sleeves short dress with three attractive colors and and available
        in various sizes.
      </Text>

      <View style={styles.price}>
        <View style={{ width: "80%" }}>
          <Text style={{ fontSize: 15, fontFamily: "montserrat-bold" }}>
            320.23 USD
          </Text>
        </View>
        <View style={{ width: "20%" }}>
          <Image
            source={require("../images/add.png")}
            style={styles.addButton}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#FFF",
    height: 250,
    width: 200,
    elevation: 2,
    borderRadius: 10,
    padding: 15,
    marginRight: 30,
    marginLeft: 2,
    marginBottom: 5,
  },
  image: {
    width: 170,
    height: 110,
    borderRadius: 10,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontFamily: "montserrat-bold",
    fontSize: 12,
    color: "#4f4a4a",
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    width: "100%",
  },
  addButton: {
    width: 25,
    height: 25,
    alignSelf: "flex-end",
  },
});

export default Couches;
