import { ScrollView, View } from "react-native";
import ToDOListInput from "./ToDoListInput";
import { useState } from "react";
import EditTodo from "./EditTodo";
import { Todos } from "./Interface_Type";
import Todo from "./Todo";
import { typeContext } from "./Context";

export default function ToDOListWrapper() {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [userId, setUserId] = useState<number>(1);

  const addTodo = (todo: string) => {
    setTodos([
      ...todos,
      { id: userId, task: todo, completed: false, isEditing: false },
    ]);
    setUserId((userId) => userId + 1);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => id != todo.id));
  };

  const toogleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        id == todo.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        id === todo.id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (id: number, task: string) => {
    setTodos(
      todos.map((todo) =>
        id === todo.id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <typeContext.Provider
      value={{ addTodo, deleteTodo, toogleTodo, editTodo, editTask }}
    >
      <View>
        <ToDOListInput />
        <ScrollView
          className="mb-[200] mt-10"
          showsVerticalScrollIndicator={false}
        >
          {todos.map((todo) => {
            return todo.isEditing ? (
              <EditTodo key={todo.id} todo={todo} />
            ) : (
              <Todo key={todo.id} todo={todo} />
            );
          })}
        </ScrollView>
      </View>
    </typeContext.Provider>
  );
}
