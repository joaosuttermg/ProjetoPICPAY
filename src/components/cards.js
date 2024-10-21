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

const cards = [
  {
    id: "1",
    title: "Cartão",
    icon: <MaterialIcons name="pix" size={30} color="#1E863B" />,
  },
  {
    id: "2",
    title: "Empréstimos",
    icon: <MaterialIcons name="newspaper" size={30} color="#1E863B" />,
  },
  {
    id: "3",
    title: "Cofrinhos",
    icon: <MaterialIcons name="add-card" size={30} color="#1E863B" />,
  },
  {
    id: "4",
    title: "Seguros",
    icon: <FontAwesome5 name="piggy-bank" size={30} color="#1E863B" />,
  },
];
