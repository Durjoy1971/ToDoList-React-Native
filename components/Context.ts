import { createContext } from "react";
import { Todos } from "./Interface_Type";

const fetchContext = createContext<(inputName: string) => void>(() => {});

interface Type {
  addTodo: (todo: string) => void;
  deleteTodo: (id: number) => void;
  toogleTodo: (id: number) => void;
  editTodo: (id: number) => void;
  editTask: (id: number, task: string) => void;
}

const typeContext = createContext<Type>({
  addTodo: () => {},
  deleteTodo: () => {},
  toogleTodo: () => {},
  editTodo: () => {},
  editTask: () => {},
});

export { fetchContext, typeContext };
