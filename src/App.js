import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [inpText, setInpText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() =>{
      filterHandler();
      saveTodos();
  },[todos,status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;    
    }
  }

  const saveTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else{
      let local = JSON.parse(localStorage.getItem('todos'));
      if(local.length === 0){
        return null;
      }
      setTodos(local);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Todo Webapp</h1>
      </header>
      <Form inpText={inpText} todos={todos} setTodos = {setTodos} setInpText={setInpText} setStatus={setStatus}  />
      <List todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
