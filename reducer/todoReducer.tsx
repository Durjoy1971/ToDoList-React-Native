import { Todos } from "components/Interface_Type";

export type Action =
  | {
      type: "addTodo";
      id: number;
      todo: string;
    }
  | { type: "deleteTodo"; id: number }
  | { type: "toogleTodo"; id: number }
  | { type: "editTodo"; id: number }
  | { type: "editTask"; id: number; task: string };

export default function todoReducer(todos: Todos[], action: Action) {
  switch (action.type) {
    case "addTodo": {
      return [
        ...todos,
        {
          id: action.id,
          task: action.todo,
          completed: false,
          isEditing: false,
        },
      ];
    }

    case "deleteTodo": {
      return todos.filter((todo) => todo.id !== action.id);
    }

    case "toogleTodo": {
      return todos.map((todo) =>
        action.id === todo.id ? { ...todo, completed: !todo.completed } : todo
      );
    }

    case "editTodo": {
      return todos.map((todo) =>
        action.id === todo.id ? { ...todo, isEditing: !todo.isEditing } : todo
      );
    }

    case "editTask": {
      return todos.map((todo) =>
        action.id === todo.id
          ? { ...todo, task: action.task, isEditing: !todo.isEditing }
          : todo
      );
    }

    default: {
      throw console.error("Unknown action: ");
    }
  }
}
