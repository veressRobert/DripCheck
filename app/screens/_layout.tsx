import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "#0b3c5c",
        },
      }}
    >
      <Tabs.Screen
        name="notificationPage"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="searchBar"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="yourProfile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mainPage"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="loadingScreen"
        options={{href: null, tabBarStyle: null}}>
      </Tabs.Screen>
      <Tabs.Screen
        name="loginScreen"
        options={{ href: null }}>
      </Tabs.Screen>
      <Tabs.Screen
        name="registerScreen"
        options={{ href: null }}>
      </Tabs.Screen>
    </Tabs>
  );
};
