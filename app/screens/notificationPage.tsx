import * as React from "react";
import { Avatar } from "react-native-paper";
import { Text, View, FlatList, StatusBar } from "react-native";
import { globalStyles } from "../styles/styles";

const notifications = [
  {
    id: "1",
    user: "no_more",
    action: "posted a new photo",
    time: "5 minutes ago",
    image: "https://via.placeholder.com/57",
  },
  {
    id: "2",
    user: "lyla",
    action: "posted a new photo",
    time: "10 minutes ago",
    image: "https://via.placeholder.com/50",
  },
  {
    id: "3",
    user: "alex_90",
    action: "posted a new photo",
    time: "20 minutes ago",
    image: "https://via.placeholder.com/50",
  },
];

const NotificationPage = () => {
  return (
    <View style={[globalStyles.background, { flex: 1 }]}>
      <StatusBar
        backgroundColor={globalStyles.background.backgroundColor}
        barStyle="light-content"
      />
      <View
        style={{
          paddingTop: 50,
          paddingBottom: 30,
          alignItems: "center",
        }}
      >
        <Text style={[globalStyles.text, { fontSize: 24, fontWeight: "bold" }]}>
          Notification Center
        </Text>
      </View>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
          >
            <Avatar.Image source={{ uri: item.image }} size={50} />
            <View style={{ marginLeft: 10 }}>
              <Text style={globalStyles.text}>
                <Text style={{ fontWeight: "bold" }}>{item.user}</Text>{" "}
                {item.action}
              </Text>
              <Text style={{ color: "gray" }}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default NotificationPage;
