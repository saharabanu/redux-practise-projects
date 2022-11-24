import React from 'react'
import Footer from './Footer'
import Header from './Header'
import TodoInput from './TodoInput'
import TodoLists from './TodoLists'

const TodoApp = () => {
  return (
    <>
        <div
            className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
        >
            
         <Header/>

            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                
                <TodoInput/>
                <hr className="mt-4" />

               
                <TodoLists/>

                <hr className="mt-4" />

              
               <Footer/>
               <hr className="mt-4" />
               
            </div>
        </div>
    </>
  )
}

export default TodoApp