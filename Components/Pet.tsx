import { Text, View } from "react-native"

type PetProps = {
  petName: {
    firstName: string
    lastName: string
  }
  type: string
}
export const Pet = (props: PetProps) => {
  const { firstName, lastName } = props.petName
  return (
    <View>
      <Text>
        You own a {props.type} named {firstName} {lastName}.
      </Text>
    </View>
  )
}
