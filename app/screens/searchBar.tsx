import * as React from "react";
import { Searchbar } from "react-native-paper";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/styles";

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View style={globalStyles.background}>
      <View
        style={{
          paddingTop: 50,
          width: "80%",
          maxWidth: 400,
          alignSelf: "center",
        }}
      >
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
    </View>
  );
};

export default MyComponent;
