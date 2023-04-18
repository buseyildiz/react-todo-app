
import { createContext, useState, useContext } from "react";

export const TodoContext = createContext();
export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = (props) => {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(savedTodos || []);
  const [form, setForm] = useState({ todo: "" });

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        form,
        setForm,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};