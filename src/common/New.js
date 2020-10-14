import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function New({ source }) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={source} style={styles.image} />
      </View>
      <View
        style={{
          width: "65%",
          height: "100%",
          justifyContent: "flex-end",
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 9, fontFamily: "Montserrat-medium" }}>
          Slakal sleeves short dress with three attractive colors
        </Text>
        <Text style={{ fontSize: 11, fontFamily: "montserrat-bold" }}>
          464.96
        </Text>
      </View>
      <View style={{ width: "5%", justifyContent: "flex-end", height: "100%" }}>
        <Image
          source={require("../images/add.png")}
          style={{ width: 17, height: 17 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 240,
    height: 60,
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 10,
    padding: 6,
    marginVertical: 5,
    marginRight: 20,
    marginLeft: 2,
  },
  image: {
    height: 50,
    width: 60,
    borderRadius: 10,
  },
});

export default New;
