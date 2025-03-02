import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  Linking,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import Ionicons from "@expo/vector-icons/Ionicons";
import  firestore, { collection }  from "@react-native-firebase/firestore";
import { db } from "@/firebaseConfig";
interface Card {
  id: number;
  name: string;
  image: string;
}

const MainPage = () => {
  const swiperRef = useRef<Swiper<Card> | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // const [data,setData] = useState<any>('');
  // useEffect(
  //   () =>{
  //     (async () => {
  //       const dataColection = collection(db,'asd');
  //       const dataDoc = dataColection.doc('tags');
  //       const actualData = await dataDoc.get();
  //       console.log(actualData.id);
  //     })();
  //   }, [])
  const cards: Card[] = [
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

  const clothesList = [
    {
      id: 1,
      image: "https://via.placeholder.com/150?text=Shirt",
      name: "Red Shirt",
      link: "https://example.com/red-shirt",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150?text=Pants",
      name: "Blue Jeans",
      link: "https://example.com/blue-jeans",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150?text=Shoes",
      name: "White Sneakers",
      link: "https://example.com/white-sneakers",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150?text=Jacket",
      name: "Black Jacket",
      link: "https://example.com/black-jacket",
    },
  ];

  const handleLike = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeRight();
    }
  };

  const handleDislike = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeLeft();
    }
  };

  const handleSave = () => {
    console.log("Saved!");
  };

  const handleImagePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#043351" }}>
      <Swiper
        ref={swiperRef}
        cards={cards}
        renderCard={(card) => (
          <TouchableOpacity onPress={handleImagePress}>
            <View style={styles.card}>
              <Image source={{ uri: card.image }} style={styles.cardImage} />
              <Text style={styles.cardText}>{card.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        onSwipedLeft={(index) => console.log("Swiped left", index)}
        onSwipedRight={(index) => console.log("Swiped right", index)}
        containerStyle={{ backgroundColor: "#043351" }}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleDislike} style={styles.button}>
          <Ionicons
            name="thumbs-down"
            size={40}
            color="#FC9104"
            style={{ opacity: 1 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave} style={styles.button}>
          <Ionicons name="bookmark" size={40} color="#FC9104" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLike} style={styles.button}>
          <Ionicons
            name="thumbs-up"
            size={40}
            color="#FC9104"
            style={{ opacity: 1 }}
          />
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={handleCloseModal}
            style={styles.closeButton}
          >
            <Ionicons name="close" size={40} color="white" />
          </TouchableOpacity>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {clothesList.map((clothing) => (
              <View key={clothing.id} style={styles.clothingItem}>
                <Image
                  source={{ uri: clothing.image }}
                  style={styles.clothingImage}
                />
                <TouchableOpacity
                  onPress={() => handleLinkPress(clothing.link)}
                >
                  <Text style={styles.clothingLink}>{clothing.name}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 650,
    width: 370,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
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
  buttonsContainer: {
    position: "absolute",
    bottom: 27,
    left: "50%",
    transform: [{ translateX: -100 }],
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    zIndex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    marginHorizontal: 15,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#043351",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  clothingItem: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  clothingImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  clothingLink: {
    color: "white",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});

export default MainPage;