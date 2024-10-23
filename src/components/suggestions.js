import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const suggest = [
  {
    id: "1",
    foto: require("../img/baixados (4).jpg"),
    name: "FREE FIRE",
  },
  {
    id: "2",
    foto: require("../img/foto de perfil.jpeg"),
    name: "HELLENA",
  },
  {
    id: "3",
    foto: require("../img/play.jpg"),
    name: "Google Play ",
  },
  {
    id: "4",
    foto: require("../img/xbox.jpg"),
    name: "Xbox Cards",
  },
  {
    id: "5",
    foto: require("../img/amazon.jpg"),
    name: "Amazon Brasil",
  },
  {
    id: "6",
    foto: require("../img/baixados (5).jpg"),
    name: "Uber",
  },
];

export function Suggestions() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      data={suggest}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item}>
          <Image style={styles.foto} source={item.foto} />
          
            <Text style={styles.name}>{item.name}</Text>
          
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginLeft: 20,
    backgroundColor: "#fff",
    marginTop: 250,
  },
  container: {
    marginTop: -300,
  },
  tittle: {
    color: "gray",
    fontWeight: "bold",
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 100,
    resizeMode: "cover",
    marginBottom: 10,
  },
  name: {
    marginTop: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "center",
    marginBottom: 10,
    marginLeft: 5,
  },
});
