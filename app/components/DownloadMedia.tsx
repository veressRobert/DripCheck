import React, { useEffect, useState } from "react";
import { View, FlatList, Image, Text, ActivityIndicator, StyleSheet } from "react-native";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig"; 


const app = initializeApp(firebaseConfig);


export interface Card {
    id: number;
    name: string;
    image: string;
}


export const fetchImages = async (): Promise<Card[]> => {
    try {
        const storage = getStorage(app); 
        const folderRef = ref(storage, "creator_pictures/"); 
        const result = await listAll(folderRef);

        if (result.items.length === 0) return [];

        const stringToNumber = (str: string): number => {
            return str.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
        };

        const cards: Card[] = await Promise.all(
            result.items.map(async (item) => {
                const imageUrl = await getDownloadURL(item);
                const name = item.name.replace(/\.[^/.]+$/, ""); 
                return { id: stringToNumber(item.fullPath), name, image: imageUrl }; 
            })
        );

        return cards;
    } catch (error) {
        console.error("Error fetching images: ", error);
        return [];
    }
};

const ImageList: React.FC<{ cards: Card[]; loading: boolean }> = ({ cards, loading }) => {
    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={cards}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f8f8f8",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
    },
    name: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default ImageList;
