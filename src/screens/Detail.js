import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";
import Stars from "react-native-stars";
import { Entypo, Ionicons } from "@expo/vector-icons";

import SwiperComponent from "../common/SwiperComponent ";
import AddCart from "../common/AddCart";

function Detail({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: "50%" }}
        >
          <Image
            source={require("../images/back.png")}
            style={{ width: 18, height: 18 }}
          />
        </TouchableOpacity>
        <View style={{ width: "50%", alignItems: "flex-end" }}>
          <Image
            source={require("../images/bag-2.png")}
            style={{ width: 16, height: 20 }}
          />
        </View>
      </View>
      {/**Three dots */}
      <View style={{ flexDirection: "row", height: 340, width: "100%" }}>
        <View style={{ marginTop: 150 }}>
          <View style={styles.dot}></View>
          <View style={{ ...styles.dot, ...styles.dot2 }}></View>
          <View style={{ ...styles.dot, ...styles.dot3 }}></View>
        </View>
        <SwiperComponent />
      </View>
      {/**Save */}
      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <Image
          source={require("../images/save.png")}
          style={{ width: 15, height: 20, marginTop: -45 }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: 15,
          marginTop: 20,
          width: "100%",
        }}
      >
        <View style={{ width: "65%" }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "montserrat-bold",
              color: "#4f4a4a",
            }}
          >
            Autobe best Chair
          </Text>
        </View>
        <View style={{ width: "35%" }}>
          <Text
            style={{
              fontSize: 9,
              fontFamily: "montserrat-bold",
              color: "#4f4a4a",
            }}
          >
            Customer Rating
          </Text>
          {/** Start of Stars*/}
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Stars
              default={4}
              count={5}
              half={true}
              starSize={20}
              fullStar={<Entypo name="star" style={[styles.myStarStyle]} />}
              emptyStar={
                <Entypo
                  name={"star-outlined"}
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                />
              }
              halfStar={
                <Ionicons name="ios-star-half" style={[styles.myStarStyle]} />
              }
            />
            <Text
              style={{
                fontSize: 8,
                fontFamily: "montserrat-bold",
                marginHorizontal: 5,
                paddingTop: 4,
                color: "#b3aeae",
              }}
            >
              84 Reviews
            </Text>
          </View>
          {/** End of Stars*/}
        </View>
      </View>

      <Text
        style={{
          fontFamily: "montserrat-bold",
          fontSize: 16,
          color: "#b3aeae",
        }}
      >
        324.69 USD
      </Text>
      <Text
        style={{
          fontFamily: "Montserrat-medium",
          fontSize: 14,
          lineHeight: 20,
          color: "#b3aeae",
          marginTop: 20,
        }}
      >
        Full sleeves short dress with three attractive colors and available in
        various sizes.
      </Text>

      <ScrollView
        style={{ marginTop: 40 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.foto}>
          <Image
            source={require("../images/12.png")}
            style={{ width: 80, height: 80 }}
          />
        </View>
        <View style={styles.foto}>
          <Image
            source={require("../images/13.png")}
            style={{ width: 80, height: 80 }}
          />
        </View>
        <View style={styles.foto}>
          <Image
            source={require("../images/14.png")}
            style={{ width: 80, height: 80 }}
          />
        </View>
        <View style={styles.foto}>
          <Image
            source={require("../images/15.png")}
            style={{ width: 80, height: 80 }}
          />
        </View>
      </ScrollView>
      {/**Add Cart */}
      <View style={styles.addCart}>
        <AddCart />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  detail: {
    flexDirection: "row",
    width: "100%",
    marginTop: 40,
  },
  dot: {
    height: 25,
    width: 25,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#fff",
    elevation: 5,
    backgroundColor: "#3f3a42",
  },
  dot2: {
    backgroundColor: "#707070",
    marginVertical: 10,
  },
  dot3: {
    backgroundColor: "#b3b4b9",
  },
  myStarStyle: {
    color: "#000",
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: "white",
  },
  foto: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    backgroundColor: "#f5f6fb",
    borderRadius: 25,
    marginRight: 20,
  },
  addCart: {
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
});

export default Detail;
