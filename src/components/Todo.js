import React from 'react'

const Todo = ({text, todos, setTodos,todo}) => {

  const delHandler = (e) => {
    setTodos(todos.filter((e) => e.id !== todo.id));
    console.log(todo);
  }  
  const comHandler = () => {
    setTodos(todos.map((e) => {
        if(e.id === todo.id){
            return {
                ...e,completed:!e.completed
            }
        }
        return e;
    }))
  } 
  return (
    <div>
      <div className="todo">
        <li className= {`todo-item ${todo.completed ? "completed" : ""}`}>
            {text}
        </li>
        <button onClick={comHandler} className='complete-btn'><i className='fas fa-check' ></i></button>
        <button onClick={delHandler} className='trash-btn'><i className='fas fa-trash' ></i></button>
      </div>
    </div>
  )
}

export default Todo
