import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { SubmitButtonProps } from "./Interface_Type";
import { useContext } from "react";
import { typeContext } from "./Context";

export default function SubmitButton({
  todo,
  ResetInputBox,
}: SubmitButtonProps) {
  const { addTodo } = useContext(typeContext);

  return (
    <View className="mt-4">
      <Pressable
        className="m-auto"
        onPress={() => {
          if (todo.length > 0) {
            addTodo(todo);
            ResetInputBox();
          }
        }}
      >
        <Icon name="arrow-down-circle" size={35} color="teal" />
      </Pressable>
    </View>
  );
}
