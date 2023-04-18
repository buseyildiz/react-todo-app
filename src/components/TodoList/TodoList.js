import React from 'react'
import { useTodoContext } from "../../contexts/Todocontext";
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'
function TodoList() {

    const {todos} = useTodoContext()

  return (
    <div>
        <ul className='todo-list'>
            {todos.map((item) =>(
                <TodoItem key={item.id} item = {item}/>
            ))}
        </ul>
    </div>
  )
}

export default TodoList