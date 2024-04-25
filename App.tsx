import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import Home from "../exemplo-rn-main/src/screens/Home"

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
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
