import { Button, Text, View } from "react-native";
import * as React from "react";
import {Link} from "expo-router";

function Index() {
  return (
    <View>
      <Link href={"/screens/loadingScreen"}><Button title={"loadingScreen"} /> Go to loading</Link>
      <Link href={"/screens/loginScreen"}><Button title={"loginScreen"} /> Go to login</Link>
      <Link href={"/screens/forgotPasswordScreen"}><Button title={"forgotPasswordScreen"} /> Go to forgot password</Link>
      <Link href={"/screens/registerScreen"}><Button title={"registerScreen"} /> Go to register</Link>
    </View>
  );
}

export default Index;



