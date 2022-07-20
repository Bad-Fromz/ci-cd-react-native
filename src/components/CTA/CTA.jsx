import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export const CTA = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
