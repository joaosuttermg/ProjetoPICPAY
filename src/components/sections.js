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


const sections = [
  {
    id: "1",
    title: "Pix",
    icon: <MaterialIcons name="pix" size={25} color="black" />,
  },
  {
    id: "2",
    title: "Pagar boleto",
    icon: <MaterialIcons name="newspaper" size={25} color="black" />,
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
    title: "cartão de transporte",
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
];

// const HandleClick = (props) => {
//   const navigation = useNavigation();
//   if (props.id === "1") {
//     navigation.navigate("Pix");
//   }
// };

export function ViewSections() {
  return (
    <ScrollView horizontal style={styles.carousel}>
      {sections.map((section) => (
        <View key={section.id} style={styles.carouselItem}>
          <TouchableOpacity>
            <Text style={styles.sectiontitle}>{section.title}</Text>
            <Icon>{section.icon}</Icon>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  carousel: {
    marginTop: 20,
    paddingLeft: 20,
    paddingTop: 50,
  },
  carouselItem: {
    backgroundColor: "#E6E5E5",
    padding: 15,
    borderRadius: 10,
    marginRight: 20,
    width: 125,
    height: 100,
    alignItems: "center",
  },
  sectiontitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
    paddingBottom: 10,
  },
});
