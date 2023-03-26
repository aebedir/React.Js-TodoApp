import React from 'react'

function Form({inputText,setInputText,todos,setTodos,setStatus}) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);        
    }

    const submitTodoHandle = (e)=> {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed:false, id:Math.random()}
        ]); 
        setInputText("")           
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        
    <form>        
        <div className="search">
            <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} placeholder="Add..."/>
            <button className="todo-button" onClick={submitTodoHandle} type="submit">
                <i className="fas fa-plus-circle"></i>
            </button>
        </div>

        <div className="select">
            <select name="todos" className="filter-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    )
}

export default Form