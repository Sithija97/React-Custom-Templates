import * as React from "react";
import { StyleSheet, Button, SafeAreaView, Text } from "react-native";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";

export default function Home({ navigation }) {
  React.useEffect(() => {
    const ref = collection(db, "petDetails");
    const pets = onSnapshot(ref, (snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.data().name);
      });
    });
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home screen</Text>
      <Button title="+" onPress={() => navigation.navigate("Add")} />
    </SafeAreaView>
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
