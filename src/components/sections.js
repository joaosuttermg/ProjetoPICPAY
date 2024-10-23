import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";


const sections = [
  {
    id: "1",
    title: "Pix",
    icon: <MaterialIcons name="pix" size={25} color="black" />,
  },
  {
    id: "2",
    title: "Pagar boleto",
    icon: <FontAwesome5 name="barcode" size={25} color="black" />,
  },
  {
    id: "3",
    title: "Adicionar cartão",
    icon: <MaterialIcons name="add-card" size={25} color="black" />,
  },
  {
    id: "4",
    title: "Cofrinhos",
    icon: <FontAwesome5 name="piggy-bank" size={25} color="black" />,
  },
  {
    id: "5",
    title: "cartão transporte",
    icon: <FontAwesome5 name="bus" size={25} color="black" />,
  },
  {
    id: "6",
    title: "recarga de celular",
    icon: <MaterialCommunityIcons name="cellphone" size={25} color="black" />,
  },
  {
    id: "7",
    title: "pagar pessoas",
    icon: <FontAwesome name="money" size={25} color="black" />,
  },
  {
    id: "8",
    title: "Antecipar FGTS",
    icon: (
      <MaterialCommunityIcons
        name="hand-coin-outline"
        size={30}
        color="black"
      />
    ),
  },
  {
    id: "9",
    title: "Gift cards",
    icon: <SimpleLineIcons name="present" size={25} color="black" />,
  },
  {
    id: "10",
    title: "Multas e IPVA",
    icon: <MaterialIcons name="car-crash" size={30} color="black" />,
  },
];

// const HandleClick = (props) => {
//   const navigation = useNavigation();
//   if (props.id === "1") {
//     navigation.navigate("Pix");
//   }
// };

export function ViewSections() {
  return (
    <ScrollView>
      <FlatList
      showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.carousel}
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.carouselItem}>
            <Icon>{item.icon}</Icon>
            <Text style={styles.sectiontitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  carousel: {
    marginTop: 20,
    paddingLeft: 20,
    marginRight: 20,
    paddingBottom: 100,
    
  },
  carouselItem: {
    backgroundColor: "#E6E5E5",
    padding: 15,
    borderRadius: 10,
    marginRight: 20,
    width: 100,
    height: 90,
    alignItems: "center",
    textAlign: "center",
    marginBottom: 150,
  },
  sectiontitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
    alignItems: "center",
    paddingBottom: 10,
    marginTop: 10,
  },
});
