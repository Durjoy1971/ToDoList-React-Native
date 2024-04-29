interface Todos {
  id: number;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

interface TakeUserInputProps {
  fetchUserName: (inputName: string) => void;
}

interface SingleTodo {
  deleteTodo: (id: number) => void;
  toogleTodo: (id: number) => void;
  editTodo: (id: number) => void;
  todo: Todos;
}

interface ToDOListInputProps {
  addTodo: (todo: string) => void;
  userName?: string;
}

interface SubmitButtonProps extends ToDOListInputProps {
  todo: string;
  ResetInputBox: () => void;
}

interface EditTodoProps {
  editTask: (id: number, task: string) => void;
  todo: Todos;
}

export {
  Todos,
  ToDOListInputProps,
  SubmitButtonProps,
  SingleTodo,
  EditTodoProps,
  TakeUserInputProps,
};
