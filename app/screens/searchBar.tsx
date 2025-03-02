import * as React from "react";
import { Searchbar } from "react-native-paper";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../styles/styles";

const MyComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [filteredData, setFilteredData] = React.useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = React.useState<boolean>(false);

  const sampleData: string[] = [
    "T-shirt",
    "Jeans",
    "Jacket",
    "Sweater",
    "Hoodie",
    "Blazer",
    "Dress",
    "Skirt",
    "Shorts",
    "Sneakers",
    "Boots",
    "Heels",
    "Sandals",
    "Scarf",
    "Hat",
    "Gloves",
    "Socks",
    "Leggings",
    "Suit",
    "Trench Coat",
    "Cardigan",
    "Crop Top",
    "Casual",
    "Streetwear",
    "Formal",
    "Business Casual",
    "Bohemian",
    "Vintage",
    "Chic",
    "Minimalist",
    "Gothic",
    "Y2K",
    "Preppy",
    "Athleisure",
    "Punk",
    "Grunge",
    "Hipster",
    "Retro",
    "Avant-garde",
    "Sporty",
    "Edgy",
    "Nike",
    "Adidas",
    "Gucci",
    "Louis Vuitton",
    "Prada",
    "Chanel",
    "Versace",
    "Balenciaga",
    "Burberry",
    "Dior",
    "Zara",
    "H&M",
    "Uniqlo",
    "Off-White",
    "Supreme",
    "Yeezy",
    "Levi's",
    "Calvin Klein",
    "Tommy Hilfiger",
    "The North Face",
    "New Balance",
    "Fendi",
    "Givenchy",
    "Ralph Lauren",
    "Bershka",
    "Dolce & Gabbana",
  ];

  const handleSearch = (query: string): void => {
    setSearchQuery(query);
    if (query.length > 0) {
      const results = sampleData.filter((item) =>
        item.toLowerCase().startsWith(query.toLowerCase())
      );
      setFilteredData(results);
      setShowSuggestions(results.length > 0);
    } else {
      setFilteredData([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectItem = (item: string): void => {
    setSearchQuery(item);
    setShowSuggestions(false);
  };

  return (
    <View style={globalStyles.background}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={handleSearch}
          value={searchQuery}
        />
        {showSuggestions && (
          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelectItem(item)}
                style={styles.suggestionItem}
              >
                <Text style={styles.suggestionText}>{item}</Text>
              </TouchableOpacity>
            )}
            style={styles.suggestionsList}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingTop: 50,
    width: "80%",
    maxWidth: 400,
    alignSelf: "center",
  },
  suggestionsList: {
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  suggestionText: {
    fontSize: 16,
  },
});

export default MyComponent;
