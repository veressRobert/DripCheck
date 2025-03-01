import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-deck-swiper";
import { globalStyles } from "../styles/styles";

const MainPage = () => {
  const cards = [
    {
      id: 1,
      name: "John Doe",
      image: "https://via.placeholder.com/400x300?text=John",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://via.placeholder.com/400x300?text=Jane",
    },
    {
      id: 3,
      name: "Jake Peralta",
      image: "https://via.placeholder.com/400x300?text=Jake",
    },
    {
      id: 4,
      name: "Amy Santiago",
      image: "https://via.placeholder.com/400x300?text=Amy",
    },
  ];

  return (
    <View style={globalStyles.background}>
      <Swiper
        cards={cards}
        renderCard={(card) => (
          <View style={styles.card}>
            <Image source={{ uri: card.image }} style={styles.cardImage} />
            <Text style={styles.cardText}>{card.name}</Text>
          </View>
        )}
        onSwipedLeft={(index) => console.log("Swiped left", index)}
        onSwipedRight={(index) => console.log("Swiped right", index)}
        cardIndex={0}
        backgroundColor="transparent"
        stackSize={3}
        stackSeparation={15}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  card: {
    height: 400,
    width: 300,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  cardText: {
    position: "absolute",
    bottom: 20,
    left: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});

export default MainPage;
