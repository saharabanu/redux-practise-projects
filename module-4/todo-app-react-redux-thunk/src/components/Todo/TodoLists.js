import React, { useEffect } from 'react';
import Todo from './Todo';
import {useDispatch, useSelector} from 'react-redux';
import fetchTodos from '../../redux/todos/thunk/fetchTodos';
import Footer from './Footer';




const TodoLists = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();


  // getting datat from server 
  useEffect(() => {
    dispatch(fetchTodos);
  },[dispatch]);

  //to get the incomplete todos from the todo list
  const filterByIncomplete = todos.filter((todo) => !todo.completed);

  
  const filterByColors = (todo) => {
    const {colors} = filters;
    if(colors.length > 0){
      return colors.includes(todo?.color)
    }
    return true
  };
  
  return (
    <>
            <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            
            {/* overflow-y-auto */}
            {filterByIncomplete?.filter
          (filterByColors)
            .map((todo) =>( <Todo todo={todo} key={todo.id}/>))}



            <Footer filterByIncomplete={filterByIncomplete}/>
            
              

            </div>
    </>
  )
}

export default TodoLists