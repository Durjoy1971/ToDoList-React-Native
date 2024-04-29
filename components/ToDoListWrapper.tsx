import { ScrollView, Text, View } from "react-native";
import ToDOListInput from "./ToDoListInput";
import { useState, useReducer } from "react";
import EditTodo from "./EditTodo";

import { Todos } from "./Interface_Type";
import Todo from "./Todo";
import todoReducer, { Action } from "reducer/todoReducer";

export default function ToDOListWrapper() {
  const [userId, setUserId] = useState<number>(1);

  const [todos, dispatch] = useReducer<
    (todos: Todos[], action: Action) => Todos[]
  >(todoReducer, []);

  const addTodo = (toDo: string) => {
    dispatch({
      type: "addTodo",
      id: userId,
      todo: toDo,
    });
    setUserId((userId) => userId + 1);
  };

  const deleteTodo = (id: number) => {
    dispatch({
      type: "deleteTodo",
      id,
    });
  };

  const toogleTodo = (id: number) => {
    dispatch({
      type: "toogleTodo",
      id,
    });
  };

  const editTodo = (id: number) => {
    dispatch({
      type: "editTodo",
      id,
    });
  };

  const editTask = (id: number, task: string) => {
    dispatch({
      type: "editTask",
      id,
      task,
    });
  };

  return (
    <View className="">
      <ToDOListInput addTodo={addTodo} />
      <ScrollView
        className="mb-[200] mt-10"
        showsVerticalScrollIndicator={false}
      >
        {todos.map((todo) => {
          return todo.isEditing ? (
            <EditTodo key={todo.id} editTask={editTask} todo={todo} />
          ) : (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toogleTodo={toogleTodo}
              editTodo={editTodo}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
