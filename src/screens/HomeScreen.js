

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
import { ViewCards } from "../components/cards";
import { Suggestions } from "../components/suggestions";
import React, { createContext, useState,useEffect, useContext } from "react";
import { useTheme } from "../components/ThemeContext";
import { AsyncStorage } from "react-native";


export default function HomeScreen({ navigation }) {
  const [balance, setBalance] = useState(30.61);
  const [icon, setIcon] = useState("eye");
  const [showBalance, setShowBalance] = useState(true);

  useEffect(() => {
    // Load balance from AsyncStorage
    const loadBalance = async () => {
      try {
        const storedBalance = await AsyncStorage.getItem("BALANCE");
        if (storedBalance !== null) {
          setBalance(parseFloat(storedBalance));
        }
      } catch (error) {
        alert("Error loading balance");
      }
    };
    loadBalance();
  }, []);

  useEffect(() => {
    // Save balance to AsyncStorage whenever it changes
    const saveBalance = async () => {
      try {
        await AsyncStorage.setItem("BALANCE", balance.toString());
      } catch (error) {
        alert("Error saving balance");
      }
    };
    saveBalance();
  }, [balance]);
  const { theme, toggleTheme } = useTheme();
 
  const toggleIcon = () => {
    setIcon((prevIcon) => (prevIcon === "eye" ? "eye-slash" : "eye"));
    setShowBalance(!showBalance);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <StatusBar barStyle="light-content" backgroundColor={theme.headerColor} />
      <View style={[styles.header, { backgroundColor: theme.headerColor }]}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../img/foto de perfil.jpeg")}
            style={styles.profilePic}
          />
          <Text style={[styles.viewsExtract, { color: theme.textColor }]}>
            Conta
          </Text>
          <Text style={[styles.viewsExtract, { color: theme.textColor }]}>
            Ver extrato
          </Text>
        </View>
        <View style={styles.balanceAndIcon}>
          <Text style={[styles.balance, { color: theme.textColor }]}>
            Saldo em conta: {"\n"}{" "}
            {showBalance ? `R$ ${balance.toFixed(2)}` : "....."}
          </Text>
          <TouchableOpacity onPress={toggleIcon} style={styles.iconButton}>
            <FontAwesome name={icon} size={30} color={theme.textColor} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.subText, { color: theme.textColor }]}>
          Pode render 102% do CDI
        </Text>
        <TouchableOpacity>
          <Text style={[styles.link, { color: theme.textColor }]}>
            Use cartão de outro banco
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme}>
          <Text style={[styles.tema, { color: theme.textColor }]}>
            Mudar Tema
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.division, { color: theme.textColor }]}>
        Pro dia a dia
      </Text>
      <ViewSections balance={balance} setBalance={setBalance} />
      <Text style={[styles.division2, { color: theme.textColor }]}>
        Sugestões
      </Text>
      <ViewCards />
      <Suggestions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding: 20,
    paddingRight: 20,
  },
  balanceAndIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  header: {
    paddingHorizontal: 30,
    paddingBottom: 50,
    borderRadius: 20,
    width: 508,
    height: 280,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  viewsExtract: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 200,
  },
  balance: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 14,
    marginBottom: 10,
  },
  link: {
    marginVertical: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    textAlign: "center",
  },
  division: {
    fontSize: 18,
    paddingTop: 10,
    fontWeight: "bold",
    marginBottom: 20,
  },
  division2: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: -100,
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
  iconButton: {
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
    width: 50,
  },
  tema : {
    fontWeight: "bold",
    fontSize: 10,
  
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    color: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    marginLeft: 100,
    width: 100,
    height: 35,
    borderRadius: 10,
    
  }
});
