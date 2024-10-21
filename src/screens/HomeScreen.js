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
import { ViewSections } from "../components/sections";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function HomeScreen({ sections, navigation }) {
  const [balance, setBalance] = useState(30.61); // Saldo inicial fictício
  const [icon, setIcon] = useState("eye");
  const [showBalance, setShowBalance] = useState(true);

  const toggleIcon = () => {
    setIcon((prevIcon) => (prevIcon === "eye" ? "eye-slash" : "eye"));
    setShowBalance(!showBalance); 
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#01A587" />
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "https://example.com/profile-pic" }}
            style={styles.profilePic}
          />
          <Text style={styles.viewsExtract}>Conta</Text>
          <Text style={styles.viewsExtract}>Ver extrato</Text>
        </View>
        {showBalance && (
          <Text style={styles.balance}>
            Saldo em conta: {"\n"} R$ {balance.toFixed(2)}
          </Text>
        )}
        <TouchableOpacity onPress={toggleIcon} style={styles.iconButton}>
          <FontAwesome name={icon} size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.subText}>Pode render 102% do CDI</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Use cartão de outro banco</Text>
        </TouchableOpacity>
        <Text style={styles.divisions}>Pro dia a dia</Text>
      </View>
      <ViewSections />
      <FlatList
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity  style={styles.item} >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: 50,
    padding: 20,
    paddingRight: 20,
  },
  header: {
    paddingHorizontal: 30,
    paddingBottom: 50,
    backgroundColor: "#01A587",
    borderRadius: 20,
    width: 508,
    height: 270,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  viewsExtract: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    paddingRight: 200,
  },
  balance: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subText: {
    fontSize: 14,
    color: "white",
    marginBottom: 10,
  },
  link: {
    color: "#000",
    marginVertical: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    textAlign: "center",
  },
  divisions: {
    padding: 20,
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  pixButton: {
    backgroundColor: "#01A587",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  pixButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
