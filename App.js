import React from "react";
import { View, Text } from "react-native";
import { Icon } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Daily Promo</Text>
        <Icon
          reverse
          name='home'
          type='ionicon'
          color='#517fa4'
        />
      </View>
    </SafeAreaProvider>
  )
}