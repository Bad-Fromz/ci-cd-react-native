import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingVertical: 13,
    backgroundColor: colors.orange,
    borderRadius: 8,
  },

  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default styles;
