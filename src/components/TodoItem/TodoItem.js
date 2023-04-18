import React from "react";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useTodoContext } from "../../contexts/Todocontext";
import './TodoItem.css'

function TodoItem({ item }) {
  const { setTodos } = useTodoContext();

  const handleClickDone = () => {
    setTodos((prev) => {
      const newTodos = prev.map((todoItem) => {
        if (todoItem.id === item.id)
          return { ...todoItem, isCompleted: !item.isCompleted };
        return todoItem;
      });
      return newTodos;
    });
  };

  const handleClickDelete = () => {
    setTodos((prev) => {
      const newTodos = prev.filter((todoItem) => {
        return todoItem.id !== item.id;
      });
      return newTodos;
    });
  };

  return (
    <li className="todo-item" key={item.id}>
      <div className="ti-left">
        <button onClick={handleClickDone}>
          {item.isCompleted ? <BsCheckCircle /> : <BsCircle />}
        </button>
        <span className={`${item.isCompleted ? "completed" : ""}`}>
          {item.todo}
        </span>
      </div>

      <div className="ti-right">
        <button className="delete-icon" onClick={handleClickDelete}>
          <MdOutlineDeleteSweep />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
