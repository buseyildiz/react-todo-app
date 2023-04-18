import React, { useEffect } from 'react'
import './form.css'
import { useTodoContext } from '../../contexts/Todocontext'
import { useRef } from 'react';

function Form() {

  const buttonRef = useRef();

  const { todos, setTodos, form, setForm } = useTodoContext();

  useEffect(
    () => setForm({ todo: "", id: Math.random(), isCompleted: false }), // Set todo empty after adding todo
    [todos]
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Set todo to input value
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // If input is empty, dont add todo
    buttonRef.current.blur();
    if (form.todo === "") return false;
    setTodos([form, ...todos]);
  };

  // Create todo input and add button
  return (
    <div className="todo-form">
      <form action="#">
        <div className="form-control">
          <input
            className="todo-input"
            name="todo"
            type="text"
            placeholder="Add a task"
            value={form.todo}
            onChange={onChangeInput}
          />
          <button className="submit" onClick={onSubmit} ref={buttonRef}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}


export default Form