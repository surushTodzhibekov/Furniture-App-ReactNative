import React from "react";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Search(props) {
  return (
    <>
      <View style={styles.subContainer}>
        <Ionicons name="ios-search" size={22} color="#4f4a4a" />
        <TextInput
          placeholder="Search unique furniture..."
          style={styles.search}
        />
      </View>
      <View style={styles.imageSort}>
        <Image source={require("../images/sort.png")} style={styles.subImage} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 2,
    width: "85%",
    height: 35,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 1,
  },
  search: {
    fontFamily: "Montserrat-medium",
    fontSize: 12,
    paddingHorizontal: 12,
  },
  imageSort: {
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    width: "15%",
    backgroundColor: "#FFF",
    marginHorizontal: 5,
    height: 35,
    borderRadius: 10,
    marginLeft: 1,
    justifyContent: "center",
  },
  subImage: {
    width: 16,
    height: 20,
  },
});

export default Search;
