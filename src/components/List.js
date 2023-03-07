import React from 'react'
import Todo from './Todo'

const List = ({todos, setTodos, filteredTodos}) => {
  return (
    <div>
       <div className="todo-container">
          <ul className="todo-list">
            {filteredTodos.map((todo) => <Todo todos={todos} setTodos={setTodos} text={todo.text} key={todo.id} todo={todo}/>)}
          </ul>
       </div>
    </div>
  )
}

export default List
