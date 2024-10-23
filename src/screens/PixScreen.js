import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";


export default function PixScreen({ route, navigation }) {
  const { balance, setBalance } = route.params;
  const [amount, setAmount] = useState("");

  const handlePix = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0 && balance - value >= 0) {
      setBalance(balance - value);
      navigation.goBack();
    } else {
      alert("Valor inválido ou saldo insuficiente");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Realizar PIX</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TouchableOpacity onPress={handlePix} style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#01A587",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
