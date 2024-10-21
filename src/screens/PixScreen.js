import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function PixScreen({ route, navigation }) {
  const [amount, setAmount] = useState("");
  const { setBalance, balance } = route.params;

  const handlePix = () => {
    const newBalance = balance - parseFloat(amount);
    setBalance(newBalance);
    navigation.goBack();
  };

}