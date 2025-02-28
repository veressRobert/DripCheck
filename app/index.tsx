import { Button, Text, View } from "react-native";
import loadingScreen from "./screens/loadingScreen";
import * as React from "react";
import {Link} from "expo-router";

function Index() {
  return (
    <View>
      <Link href={"/screens/loadingScreen"}><Button title={"loadingScreen"} /> Go to loading</Link>
    </View>
  );
}


export default Index;



