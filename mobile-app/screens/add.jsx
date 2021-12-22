import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import * as React from "react";
import {
  StyleSheet,
  Button,
  SafeAreaView,
  Text,
  TextInput,
} from "react-native";
import { db } from "../firebase";

export default function Add({ navigation }) {
  const initialstate = {
    name: "",
    location: "",
    age: "",
    sex: "",
    contact: "",
    imgUrl: "",
  };
  const [state, setState] = React.useState(initialstate);

  const handleSubmit = async () => {
    await addDoc(collection(db, "petDetails"), {
      ...state,
      posted: serverTimestamp(),
    });
    await console.log(state);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Add screen</Text>
      <TextInput
        placeholder="pet name"
        onChangeText={(text) => setState({ ...state, name: text })}
        value={state.name}
      />
      <TextInput
        placeholder="location"
        onChangeText={(text) => setState({ ...state, location: text })}
        value={state.location}
      />
      <TextInput
        placeholder="age"
        onChangeText={(text) => setState({ ...state, age: text })}
        value={state.age}
      />
      <TextInput
        placeholder="sex"
        onChangeText={(text) => setState({ ...state, sex: text })}
        value={state.sex}
      />

      <TextInput
        placeholder="contact"
        onChangeText={(text) => setState({ ...state, contact: text })}
        value={state.contact}
      />
      <TextInput
        placeholder="image URL"
        onChangeText={(text) => setState({ ...state, imgUrl: text })}
        value={state.imgUrl}
      />
      <Button title="add" onPress={handleSubmit} />
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
