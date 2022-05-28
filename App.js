import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Shopping from "./src/components/Shopping";
import Cart from "./src/components/Cart";
import Payment from "./src/components/Payment";

const App = () => {
  return <Cart />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});

export default App;
