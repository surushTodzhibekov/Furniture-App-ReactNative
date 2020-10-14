import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Couches from "../common/Couches";
import { NavigationContainer } from "@react-navigation/native";

import New from "../common/New";
import Best from "../common/Best";

function Home({ navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={styles.heading}>Furniture</Text>
        </View>
        <View style={{ width: "50%", alignItems: "flex-end" }}>
          <Image
            source={require("../images/bag-2.png")}
            style={styles.subImage}
          />
        </View>
      </View>
      {/** Search */}
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Ionicons name="ios-search" size={22} color="#4f4a4a" />
          <TextInput
            placeholder="Search unique furniture..."
            style={styles.search}
          />
        </View>
        <View style={styles.imageSort}>
          <Image
            source={require("../images/sort.png")}
            style={styles.subImage}
          />
        </View>
      </View>

      <View style={styles.modern}>
        <Text style={styles.text}>Modern</Text>
        <View style={styles.subModern}></View>
        <Text
          style={{
            fontSize: 9,
            fontFamily: "montserrat-bold",
            color: "#4f4a4a",
          }}
        >
          Good quality items
        </Text>
      </View>

      {/**Couches */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Couches
          source={require("../images/1.png")}
          name="Beautiful Couches"
          onPress={() => navigation.navigate("detail")}
        />
        <Couches
          source={require("../images/2.png")}
          name="Autobe best chair"
          onPress={() => navigation.navigate("detail")}
        />
        <Couches
          source={require("../images/1.png")}
          name="Beautiful Couches"
          onPress={() => navigation.navigate("detail")}
        />
      </ScrollView>
      {/** New Arrivals */}
      <View style={styles.arrival}>
        <Text style={styles.arrivalText}>New Arrivals</Text>
        <View
          style={{
            height: 5,
            width: 5,
            borderRadius: 5,
            backgroundColor: "#4f4a4a",
            marginHorizontal: 4,
          }}
        ></View>
        <Text
          style={{
            fontFamily: "montserrat-bold",
            fontSize: 10,
            color: "#4f4a4a",
          }}
        >
          Good quality items
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <New source={require("../images/sofa.png")} />
        <New source={require("../images/lr.png")} />
        <New source={require("../images/sofa.png")} />
      </ScrollView>
      {/**end of new arrival */}
      {/**Best seller */}
      <Text
        style={{
          color: "#4f4a4a",
          marginTop: 20,
          fontFamily: "montserrat-bold",
          fontSize: 18,
        }}
      >
        Best Sellers
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Best />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
    width: "100%",
  },
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
  heading: {
    fontFamily: "montserrat-bold",
    fontSize: 22,
  },
  text: {
    fontFamily: "montserrat-bold",
    fontSize: 18,
    color: "#4f4a4a",
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
  modern: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  subModern: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#4f4a4a",
  },
  arrival: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 10,
    alignItems: "center",
  },
  arrivalText: {
    fontFamily: "montserrat-bold",
    fontSize: 20,
    color: "#4f4a4a",
  },
});

export default Home;
