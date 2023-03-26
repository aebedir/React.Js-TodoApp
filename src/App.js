import { useEffect, useState }  from 'react';
import './App.css';
import Form from './Component/Form';
import TodoList from './Component/TodoList';


function App() {
  const [inputText,setInputText] =useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  useEffect(( ) => {
    filterHandler(todos)
  },[todos,status])
  



  const filterHandler =()=> {
    switch (status) {
      case "completed":
        setFiltered(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFiltered(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        
    }
  }
  return(
    <div className='App'>
      <header>
        <h1>MY TODO LIST</h1>
        <Form inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus = {setStatus}/>        
          
        <TodoList
        todos={todos}
        setTodos={setTodos}
        filtered = {filtered}
        />
              
      </header>   
    </div>
  );
}

export default App;
