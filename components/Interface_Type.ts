interface Todos {
  id: number;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

type SingleTodo = { todo: Todos };
type EditTodoProps = { todo: Todos };

interface ToDOListInputProps {
  addTodo: (todo: string) => void;
  userName?: string;
}

interface SubmitButtonProps {
  todo: string;
  ResetInputBox: () => void;
}

export {
  Todos,
  ToDOListInputProps,
  SubmitButtonProps,
  SingleTodo,
  EditTodoProps,
};
