import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Couches from "../common/Couches";

import New from "../common/New";
import Best from "../common/Best";
import Search from "../common/Search";
import Header from "../common/Header";

function Home({ navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 20,
      }}
    >
      {/** Start of header */}
      <View style={styles.header}>
        <Header />
      </View>
      {/** End of headers */}

      {/** Search */}
      <View style={styles.container}>
        <Search />
      </View>
      {/** end of Search */}

      {/** Start of Modern */}
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
      {/** End of Modern */}

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
        <View style={styles.subArrivals}></View>
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

  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 40,
  },

  text: {
    fontFamily: "montserrat-bold",
    fontSize: 18,
    color: "#4f4a4a",
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
  subArrivals: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: "#4f4a4a",
    marginHorizontal: 4,
  },
});

export default Home;
