import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../components/ThemeContext";

export default function PixScreen({ route, navigation }) {
  const { balance, setBalance } = route.params;
  const [amount, setAmount] = useState("");

  const { theme } = useTheme();

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
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>Realizar PIX</Text>
      <TextInput
        style={[styles.input, { borderColor: theme.textColor, color: theme.textColor }]}
        placeholder="Digite o valor"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        placeholderTextColor={theme.textColor}
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
