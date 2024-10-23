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

const cards = [
  {
    id: "1",
    title: "Cartão",
    icon: <MaterialIcons name="credit-card" size={30} color="black" />,
  },
  {
    id: "2",
    title: "Empréstimos",
    icon: <FontAwesome5 name="hand-holding-usd" size={30} color="black" />,
  },
  {
    id: "3",
    title: "Cofrinhos",
    icon: <FontAwesome5 name="piggy-bank" size={30} color="black" />,
  },
  {
    id: "4",
    title: "Seguros",
    icon: <FontAwesome5 name="shield-alt" size={30} color="black" />,
  },
];

export function ViewCards() {
  return (
      <FlatList
        style={styles.container}
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.tittle}>{item.title}</Text>
            <Icon>{item.icon}</Icon>
          </TouchableOpacity>
        )}
      />
    
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#E6E5E5",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    marginTop: -300,
    
  },
  tittle: {
    color : "gray",
    fontWeight: "bold",
  },
});
