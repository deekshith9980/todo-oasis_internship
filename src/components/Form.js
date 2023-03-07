import React from 'react'
import '../App.css';

const Form = ({ setInpText, setTodos , todos, inpText, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInpText(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {text: inpText, completed: false, id: Math.random() * 1000}]);
    setInpText("");

  }
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
  return (
    <div className='form'>
      <input onChange={inputTextHandler} className="todo-input" type="text" placeholder="Add a new Task..." value={inpText} />
      <button onClick={submitHandler} className="todo-button" type="submit">Add</button>
      <div class="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Pending</option>
        </select>
      </div>
    </div>
  )
}

export default Form
