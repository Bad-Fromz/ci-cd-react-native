import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export const CTA = ({ label, onPress, testID }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text testID={testID} style={styles.text}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
