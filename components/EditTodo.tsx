import { Pressable, TextInput, View } from "react-native";
import { EditTodoProps } from "./Interface_Type";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function EditTodo({ editTask, todo }: EditTodoProps) {
  const [task, setTask] = useState<string>(todo.task);
  return (
    <View>
      <TextInput
        className="bg-blue-100 p-1 border-blue-400 border text-center text-teal-700 font-medium text-base"
        value={task}
        placeholder="Edit Task"
        autoCapitalize="words"
        placeholderTextColor="black"
        onChangeText={(text) => setTask(text)}
      />
      <Pressable
        className="items-center mt-3 mb-2"
        onPress={() => editTask(todo.id, task)}
      >
        <Icon name="checkmark-done-circle-sharp" color="teal" size={30} />
      </Pressable>
    </View>
  );
}