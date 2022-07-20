import { Text, View } from "react-native";
import React from "react";
import { CTA } from "./components/CTA/CTA";

const App = () => {
  return (
    <View style={{ padding: 26, backgroundColor: "white", flex: 1 }}>
      <Text>App</Text>
      <CTA testID={"welcome"} label={"WELCOME"} onPress={() => console.log("Hello world")} />
    </View>
  );
};

export default App;
