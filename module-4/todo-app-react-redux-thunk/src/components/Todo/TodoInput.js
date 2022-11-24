import React, { useState } from 'react';
import note from '../../images/notes.png';
import plus from '../../images/plus.png';
import doubletick from '../../images/double-tick.png'
import { useDispatch, useSelector } from 'react-redux';
import addTodo from '../../redux/todos/thunk/addTodo';
import {  clearCompleted } from '../../redux/todos/todosAction';
import toast from "react-hot-toast";


const TodoInput = () => {
    const todos = useSelector((state)=> state.todos);
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
   

    const handleInput = (e) => {
        setInput(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input === ""){
            alert("please type your task")
        }
        else{
            dispatch(addTodo(input));
            toast.success("Todo Added Successfully")
            setInput("")
        }
       
    }

    const clearhandler = () => {
        dispatch(clearCompleted())
    }

    // toget incomplete todos from todos data 
    const filterByIncompleted  = todos?.filter((todo) => !todo.completed)
    
  return (
    <>
       <div>
            <form onSubmit={handleSubmit}
            className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
                <img src={note} className="w-6 h-6"alt="Add todo"/>
                <input type="text"placeholder="Type your todo"className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500" value={input}
                    onChange={handleInput}
                />
                <button type="submit"className={`appearance-none w-8 h-8 bg-[url('${plus}')] bg-no-repeat bg-contain`}></button>
                    </form>

                    <ul className="flex justify-between my-4 text-xs text-gray-500">
                        <li className="flex space-x-1 cursor-pointer">
                            <img
                                className="w-4 h-4"
                                src={doubletick}
                                alt="Complete"
                            />
                            <span>InComplete Tasks</span>
                        </li>
                       { filterByIncompleted?.length > 0 && (<li onClick={clearhandler}className="cursor-pointer"> Clear Complete Tasks</li>)}
                    </ul>
                </div> 
    </>
  )
}

export default TodoInput