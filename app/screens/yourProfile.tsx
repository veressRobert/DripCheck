import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
  SafeAreaView,
  Modal,
  Alert,
  Pressable,
} from "react-native";
import { globalStyles } from "../styles/styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UploadMedia from '../components/UploadMedia.js';
import { Link } from "expo-router";
import * as FileSystem from "expo-file-system";

const { height, width } = Dimensions.get("window");

interface Board {
  id: number;
  name: string;
  savedPosts: number;
}


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
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [creatorModalVisible, setCreatorModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]); // Helyes típusadás

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
        <View>
          <View>
            <SafeAreaProvider>
              <SafeAreaView style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={profileModalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setCreatorModalVisible(false);
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <UploadMedia location="profile_pictures"/>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setProfileModalVisible(false)}>
                        <Text style={styles.textStyle}>Cancel</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
                <Pressable style={{ width: '80%', backgroundColor: '#FC9104', borderRadius: 20, padding: 10, elevation: 2 }}
                  onPress={() => setProfileModalVisible(true)}>
                  <Text style={styles.textStyle}>Add Profile Picture</Text>
                </Pressable>
              </SafeAreaView>
            </SafeAreaProvider>
          </View>
        </View>
        <Image
          source={require("../../assets/images/profilepic.jpg")}
          style={styles.profileImage}
        />


        <Text style={globalStyles.text}>John Doe</Text>
        <Text style={globalStyles.text}>{boards.length} Boards</Text>



            <Link href="../authScreens/loginScreen" asChild>
              <Pressable style={{
                width: '80%', backgroundColor: 'red', borderRadius: 20, padding: 10, elevation: 2 
              }} ><Text style={{ alignSelf: "center", color: "white", fontSize: 13 }}>Log out</Text></Pressable>
            </Link> 
        <View>


          <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>

                <Modal animationType="slide" transparent={true} visible={modalVisible}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView2}>
                      <Text style={styles.modalText}>{selectedBoard}</Text>
                      <ScrollView>
                        {images.map((image, index) => (
                          <Image key={index} source={{ uri: image }} style={styles.image} />
                        ))}
                      </ScrollView>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(false)}
                      >
                        <Text style={styles.textStyle}>Close</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>



              <Modal
                animationType="slide"
                transparent={true}
                visible={creatorModalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setCreatorModalVisible(false);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <UploadMedia location="creator_pictures" />
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setCreatorModalVisible(false)}>
                      <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable style={{ width: '80%', backgroundColor: '#FC9104', borderRadius: 20, padding: 10, elevation: 2}}
                onPress={() => setCreatorModalVisible(true)}>
                <Text style={styles.textStyle}>Upload picture</Text>
              </Pressable>
            </SafeAreaView>
          </SafeAreaProvider>


        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: width,
  },
  profileContainer: {
    position: "absolute",
    top: height / 2 - 350,
    left: width / 2 - 75,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    //backgroundColor: "rgba(0, 0, 0, 0.5)", // Fekete, 50%-os áttetszőség
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView2: {
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Fehér, 90%-os áttetszőség
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  buttonClose2: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  button2: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  image: {
    width: 100, // Változtasd meg, ha más méret kell
    height: 100,
    borderRadius: 10,
    margin: 5,
  },
});

export default YourProfile;