import { Button, Text, View } from "react-native";
import * as React from "react";
import {Redirect} from "expo-router";

function Index() {
  return (
    <View>
      <Redirect href={"/screens/loadingScreen"} />
    </View>
  );
}

export default Index;



