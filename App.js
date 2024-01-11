import React from "react";
import { View, Text } from "react-native";
import { Icon, Image } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "./src/values/colors/colors";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1,  backgroundColor: colors.dark.containerColor}}>
        <Image
          source={require("./src/assets/logo.png")}
          style={{width: 250, height: 250}}
        />
      </View>
    </SafeAreaProvider>
  )
}