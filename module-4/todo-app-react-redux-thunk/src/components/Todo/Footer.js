import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { colorChanged } from '../../redux/filters/filtersAction';


const Footer = ({filterByIncomplete}) => {
   
    const todos = useSelector((state)=> state.todos);
    const filters = useSelector((state)=> state.filters);
    const { colors} = filters;
  
    
    const dispatch = useDispatch();

//    remaining task left function 
    const todosRemaining = todos?.filter((todo)=> !todo.completed).length;

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

    // color change handler  
    const colorChangedHandler = (color) => {
        if(colors.includes(color)){
            dispatch(colorChanged(color, "removed"))
        }
        else{
            dispatch(colorChanged(color, "added"))
        }
         
    }

   

  return (
    <>
         <div className="mt-4 flex justify-between text-xs text-gray-500">
                    <p>{numberOfTodos(todosRemaining)} left</p>
                    <ul className="flex space-x-1 items-center text-xs">
                       
                        <li></li>
                        <li></li>
                        <li
                            className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes("green") && "bg-green-500"}`}
                        onClick={()=> colorChangedHandler("green")}></li>
                        <li
                            className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && "bg-red-500"}`}
                            onClick={()=> colorChangedHandler("red")}></li>
                        <li
                            className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes("yellow") && "bg-yellow-500"}`}
                            onClick={()=> colorChangedHandler("yellow")}></li>
                    </ul>
                </div>
    </>
  )
}

export default Footer;


