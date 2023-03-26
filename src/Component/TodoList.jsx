import React from 'react'
import Todo from './Todo'

function TodoList({todos,setTodos,filtered}) {
    return (
    <div>
        <div className='todo-container'>
            <ul className="todo-list">
                {filtered.map((todo) => (
                    <Todo
                    text={todo.text}
                    todo = {todo}
                    key = {todo.id}
                    todos = {todos}
                    setTodos = {setTodos}
                    />                    
                ))}
                
                
            </ul>
        </div>
        
    </div>
    )
} 

export default TodoList