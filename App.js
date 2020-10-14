import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./src/navigations/Navigator";

enableScreens();

const fetchFont = () => {
  return Font.loadAsync({
    "montserrat-bold": require("./src/fonts/Montserrat-ExtraBold.otf"),
    "Montserrat-medium": require("./src/fonts/Montserrat-Medium.otf"),
    "Montserrat-regular": require("./src/fonts/Montserrat-Regular.otf"),
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFont} onFinish={() => setFontLoaded(true)} />
    );
  }
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
