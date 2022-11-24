import React from 'react'
import { useSelector } from 'react-redux';


const FooterCompeleteTdo = () => {
  const todos = useSelector((state)=> state.todos);
 
//    remaining task left function 
  const todosRemaining = todos?.filter((todo)=> todo.completed).length;

  const numberOfTodos = (num) => {
      switch (num) {
          case 0:
              return "No Task"
          case 1:
              return "1 Task"
      
          default:
              return  `${num} task`
      }

  };
  return (
    <>
         <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(todosRemaining)} left</p>
           
        </div>
    </>
  )
}

export default FooterCompeleteTdo