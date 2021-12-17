import * as React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NativeBaseProvider, Box, Button, Text } from "native-base";

export default function Start({ navigation }) {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Text>Open up App.js to start working on your app!</Text>
          <Button
            size="sm"
            variant="subtle"
            onPress={() => navigation.navigate("Home")}
          >
            Get started
          </Button>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
