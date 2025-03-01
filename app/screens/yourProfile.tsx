import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
} from "react-native";
import { globalStyles } from "../styles/styles";

const { height, width } = Dimensions.get("window");

const boards = [
  { id: "1", name: "Street Style", savedPosts: 20 },
  { id: "2", name: "Summer Collection", savedPosts: 15 },
  { id: "3", name: "Haute Couture", savedPosts: 30 },
  { id: "4", name: "Casual Wear", savedPosts: 10 },
  { id: "5", name: "Streetwear", savedPosts: 18 },
  { id: "6", name: "Winter Trends", savedPosts: 22 },
  { id: "7", name: "Vintage Vibes", savedPosts: 50 },
  { id: "8", name: "Modern Chic", savedPosts: 40 },
  { id: "9", name: "Evening Wear", savedPosts: 12 },
  { id: "10", name: "Activewear", savedPosts: 28 },
  { id: "11", name: "Beach Party", savedPosts: 25 },
  { id: "12", name: "Boho Style", savedPosts: 12 },
  { id: "13", name: "Office Wear", savedPosts: 35 },
  { id: "14", name: "Holiday Collection", savedPosts: 50 },
];

const YourProfile = () => {
  const [animations] = useState(boards.map(() => new Animated.Value(0)));

  useEffect(() => {
    Animated.stagger(
      100,
      animations.map((animation) =>
        Animated.timing(animation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        })
      )
    ).start();
  }, [animations]);

  return (
    <View style={globalStyles.background}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.boardContainer}>
          {boards.map((board, index) => (
            <Animated.View
              key={board.id}
              style={[
                styles.boardItem,
                {
                  opacity: animations[index],
                  transform: [
                    {
                      translateY: animations[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [30, 0],
                      }),
                    },
                  ],
                  left: index % 2 === 0 ? 20 : width - 160,
                  top: index % 5,
                },
              ]}
            >
              <Text style={styles.boardText}>{board.name}</Text>
              <Text style={styles.boardText}>
                {board.savedPosts} saved posts
              </Text>
            </Animated.View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/images/react-logo.png")}
          style={styles.profileImage}
        />
        <Text style={globalStyles.text}>John Doe</Text>
        <Text style={globalStyles.text}>{boards.length} Boards</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    width: width,
    marginTop: 0,
  },
  profileContainer: {
    position: "absolute",
    top: height / 2 - 100,
    left: width / 2 - 60,
    alignItems: "center",
    zIndex: 2,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 60,
    marginBottom: 5,
  },
  boardContainer: {
    marginTop: 0,
    paddingBottom: 20,
  },
  boardItem: {
    width: width * 0.3,
    height: width * 0.15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(106, 143, 166, 0.4)",
    borderRadius: 17,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  boardText: {
    color: "#fab252",
  },
});

export default YourProfile;
