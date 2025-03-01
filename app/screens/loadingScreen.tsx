import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/styles";

const loadingScreen = () => {
  return (
    <View style={globalStyles.background}>
      <Text style={globalStyles.text}>loading screen</Text>
    </View>
  );
};
export default loadingScreen;
