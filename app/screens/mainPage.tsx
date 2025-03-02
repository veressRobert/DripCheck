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
  ActivityIndicator,
  StatusBar,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { fetchImages } from "../components/DownloadMedia";
import ImageList from "../components/DownloadMedia";
import  { collection, getDocs, query, where }  from "firebase/firestore";
import { db } from "@/firebaseConfig";

interface Card {
  id: number;
  name: string;
  image: any;
  tags: string[];
  clothingItems: ClothingItem[];
}

interface ClothingItem {
  id: number;
  image: any;
  name: string;
  link: string;
}

// const cards: Card[] = [
//   {
//     id: 1,
//     name: "Theo James",
//     image: require("../../assets/images/men2.jpg"),
//     tags: ["casual", "modern"],
//     clothingItems: [
//       {
//         id: 1,
//         image:
//           "https://m.media-amazon.com/images/I/71cVOgvystL._AC_UL1500_.jpg",
//         name: "Casual Oxford Shirt",
//         link: "https://www.amazon.com/dp/B07FKJX3NK",
//       },
//       {
//         id: 2,
//         image:
//           "https://m.media-amazon.com/images/I/71NOEHljAeL._AC_UL1500_.jpg",
//         name: "Modern Fit Jeans",
//         link: "https://www.amazon.com/dp/B07RZLJ1NJ",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Hedinke",
//     image: require("../../assets/images/pers3.jpg"),
//     tags: ["elegant", "formal"],
//     clothingItems: [
//       {
//         id: 1,
//         image:
//           "https://m.media-amazon.com/images/I/61IUhoN0jIL._AC_UL1500_.jpg",
//         name: "Professional Blazer",
//         link: "https://www.amazon.com/dp/B07YY2F118",
//       },
//       {
//         id: 2,
//         image:
//           "https://m.media-amazon.com/images/I/61c0rQBFAbL._AC_UL1500_.jpg",
//         name: "Pencil Skirt",
//         link: "https://www.amazon.com/dp/B07QXNM3NV",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Emma Rea",
//     image: require("../../assets/images/pers4.jpg"),
//     tags: ["casual", "street"],
//     clothingItems: [
//       {
//         id: 1,
//         image:
//           "https://m.media-amazon.com/images/I/71f3nBcXHhL._AC_UL1500_.jpg",
//         name: "Street Style Hoodie",
//         link: "https://www.amazon.com/dp/B08KVWVXB3",
//       },
//       {
//         id: 2,
//         image:
//           "https://m.media-amazon.com/images/I/81xXDjojYKL._AC_UL1500_.jpg",
//         name: "Urban Sneakers",
//         link: "https://www.amazon.com/dp/B07DJLMQZ3",
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Dylan Fit",
//     image: require("../../assets/images/scndPerson.jpg"),
//     tags: ["business", "professional"],
//     clothingItems: [
//       {
//         id: 1,
//         image:
//           "https://m.media-amazon.com/images/I/61Zf6BQvGvL._AC_UL1500_.jpg",
//         name: "Business Suit Set",
//         link: "https://www.amazon.com/dp/B07TZNP2S8",
//       },
//       {
//         id: 2,
//         image:
//           "https://m.media-amazon.com/images/I/61jvFw72OIL._AC_UL1500_.jpg",
//         name: "Professional Heels",
//         link: "https://www.amazon.com/dp/B07F6WLZF4",
//       },
//     ],
//   },
// ];

const MainPage = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [tagCounts, setTagCounts] = useState<{ [key: string]: number }>({});
  const [selectedClothes, setSelectedClothes] = useState<ClothingItem[]>([]);
  const swiperRef = useRef<Swiper<Card> | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [data,setData] = useState<any>([]);

  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  read();
  console.log(data);
    const loadImages = async () => {
      setLoading(true);
      const fetchedCards = await fetchImages();
      console.log("Fetched Cards:", fetchedCards);
      setCards(fetchedCards);
      setLoading(false);
    };

    loadImages();
  }, []);

    const read = async () =>{
      const todosCollection = collection(db, 'veressrobert73@gmail.com','tags');
      const q = query(todosCollection);
      const dataDoc = await getDocs(q);
      setData(dataDoc);
    }



  // const clothesList = [
  //   {
  //     id: 1,
  //     image: "https://via.placeholder.com/150?text=Shirt",
  //     name: "Red Shirt",
  //     link: "https://example.com/red-shirt",
  //   },
  //   {
  //     id: 2,
  //     image: "https://via.placeholder.com/150?text=Pants",
  //     name: "Blue Jeans",
  //     link: "https://example.com/blue-jeans",
  //   },
  //   {
  //     id: 3,
  //     image: "https://via.placeholder.com/150?text=Shoes",
  //     name: "White Sneakers",
  //     link: "https://example.com/white-sneakers",
  //   },
  //   {
  //     id: 4,
  //     image: "https://via.placeholder.com/150?text=Jacket",
  //     name: "Black Jacket",
  //     link: "https://example.com/black-jacket",
  //   },
  // ];

  const handleSwipeRight = (index: number) => {
    const currentCard = cards[index];

    const newTagCounts = { ...tagCounts };
    currentCard.tags.forEach((tag) => {
      newTagCounts[tag] = (newTagCounts[tag] || 0) + 1;
    });
    setTagCounts(newTagCounts);

    if (index === cards.length - 1) {
      setShowSummary(true);
    }
  };

  const handleSwipeLeft = (index: number) => {
    if (index === cards.length - 1) {
      setShowSummary(true);
    }
  };

  const getPopularTags = () => {
    return Object.entries(tagCounts)
      .sort(([, a], [, b]) => (b as number) - (a as number))
      .slice(0, 3)
      .map(([tag, count]) => ({ tag, count }));
  };

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

  const handleImagePress = (card: Card) => {
    setSelectedClothes(card.clothingItems);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  if (showSummary) {
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryTitle}>Most Popular Tags</Text>
      {getPopularTags().map(({ tag, count }, index) => (
        <View key={index} style={styles.summaryTagItem}>
          <Text style={styles.summaryTagRank}>#{index + 1}</Text>
          <View style={styles.summaryTagBubble}>
            <Text style={styles.summaryTagText}>{tag}</Text>
            <Text style={styles.summaryTagCount}>{count} times</Text>
          </View>
        </View>
      ))}
      <TouchableOpacity
        style={styles.restartButton}
        onPress={() => {
          setShowSummary(false);
          setTagCounts({});
        }}
      >
        <Text style={styles.restartButtonText}>Start Over</Text>
      </TouchableOpacity>
    </View>
  );
}
  return (
      <View style={{ flex: 1, backgroundColor: "#043351" }}>
        <StatusBar backgroundColor="#043351" barStyle="light-content" />
        {cards.length > 0 ? (<Swiper<Card>
          ref={(swiper) => (swiperRef.current = swiper)}
          cards={cards}
          renderCard={(card) => (
            <TouchableOpacity onPress={() => handleImagePress(card)}>
              <View style={styles.card}>
                <Image source={{ uri: card.image }} style={styles.cardImage} />
                <Text style={styles.cardText}>{card.name}</Text>
              </View>
            </TouchableOpacity>
          )}
          onSwipedLeft={handleSwipeRight}
        onSwipedRight={handleSwipeLeft}
          containerStyle={{
            backgroundColor: "#043351",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "absolute",
            top: 0,
            width: "80%",
            height: "50%",
            maxWidth: 350,
            maxHeight: 300,
          }}
        />) : (<ActivityIndicator size="large" color="#0000ff" />)}


      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.dislikeButton} onPress={handleDislike}>
          <Ionicons name="close" size={40} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.likeButton} onPress={handleLike}>
          <Ionicons name="checkmark" size={40} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Ionicons name="heart" size={40} color="#fff" />
        </TouchableOpacity>
      </View>


      <Modal visible={modalVisible} onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={handleCloseModal}>
            <Ionicons
              name="close-circle-outline"
              size={40}
              color="#999"
              style={styles.closeIcon}
            />
          </TouchableOpacity>
          <Text style={styles.modalTitle}></Text>
          <ScrollView style={styles.scrollView}>
            {selectedClothes.map((item) => (
              <View key={item.id} style={styles.itemContainer}>
                <Image source={item.image} style={styles.modalImage} />
                <Text style={styles.modalItemName}>{item.name}</Text>
                <TouchableOpacity onPress={() => handleLinkPress(item.link)}>
                  <Text style={styles.modalLink}>Buy Now</Text>
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
    height: 600,
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
    borderRadius: 0,
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
  tagsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  tagBubble: {
    backgroundColor: "#043351",
    borderRadius: 10,
    padding: 5,
    margin: 2,
  },
  tagText: {
    color: "#fff",
    fontSize: 14,
  },
  actionsContainer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dislikeButton: {
    backgroundColor: "#FC9104",
    padding: 10,
    borderRadius: 50,
  },
  likeButton: {
    backgroundColor: "#FC9104",
    padding: 10,
    borderRadius: 50,
  },
  saveButton: {
    backgroundColor: "#FC9104",
    padding: 10,
    borderRadius: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  closeIcon: {
    position: "absolute",
    top: 30,
    right: -200,
  },
  modalTitle: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  scrollView: {
    width: "80%",
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  modalItemName: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
  },
  modalLink: {
    color: "#4caf50",
    marginTop: 10,
  },
  popularTagsContainer: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  popularTagsTitle: {
    fontSize: 18,
    color: "#fff",
  },
  popularTagsList: {
    flexDirection: "row",
  },
  popularTagText: {
    color: "#fff",
    fontSize: 16,
    marginRight: 10,
  },
  summaryContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  summaryTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  summaryTagItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  summaryTagRank: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  summaryTagBubble: {
    backgroundColor: "#043351",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  summaryTagText: {
    color: "#fff",
    fontSize: 16,
  },
  summaryTagCount: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  restartButton: {
    marginTop: 20,
    backgroundColor: "#FC9104",
    padding: 10,
    borderRadius: 5,
  },
  restartButtonText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default MainPage;