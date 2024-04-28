import { Text, View } from "react-native"

type WelcomeProps = {
  name: string
  age: number
  gender: boolean
}

export default function Welcome(props: WelcomeProps) {
  return (
    <View>
      <Text>
        Hello {props.name}!{"\n"}
        You are a {props.age} year old {props.gender ? "man" : "woman"}.
      </Text>
    </View>
  )
}
