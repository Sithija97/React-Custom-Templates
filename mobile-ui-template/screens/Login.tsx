import { View, Text, Button } from "react-native";
import React from "react";

export const Login = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("DrawerGroup")}
      />
      <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
};
