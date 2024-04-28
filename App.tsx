import { StyleSheet, Text, View } from "react-native"
import Welcome from "./Components/Welcome"
import { Pet } from "./Components/Pet"
import { PetQualities } from "./Components/PetQualities"
import { useState } from "react"

export default function App() {
  const petName = {
    firstName: "Tiger",
    lastName: "King",
  }

  const qualities = [
    { qualOne: "a Maine Coon", qualTwo: "enormous", qualThree: "cute", age: 2 },
    {
      qualOne: "a Turkish Angora",
      qualTwo: "medium",
      qualThree: "calm",
      age: 7,
    },
  ]

  const [finalMessage, setFinalMessage] = useState("End")
  return (
    <View style={styles.container}>
      <Welcome name="Pixie" age={30} gender={true} />
      <Pet petName={petName} type="cat" />
      <PetQualities qualities={qualities} />
      <Text>{finalMessage}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
})
