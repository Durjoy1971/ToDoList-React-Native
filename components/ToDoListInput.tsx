import { TextInput, View } from "react-native";
import SubmitButton from "./SubmitButton";
import { useState } from "react";

export default function ToDOListInput() {
  const user: string = "Enter Your Todo's ";
  const [todo, setTodo] = useState<string>("");

  function ResetInputBox() {
    setTodo("");
  }

  return (
    <View>
      <TextInput
        className="bg-blue-100 p-2 border-blue-400 border text-center text-teal-500 font-semibold text-lg"
        value={todo}
        placeholder={user}
        placeholderTextColor="black"
        onChangeText={(text) => setTodo(text)}
      />
      <SubmitButton todo={todo} ResetInputBox={ResetInputBox} />
    </View>
  );
}
