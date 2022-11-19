import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counter/actions';


const Counter1 = () => {
  const count = useSelector((state)=> state.counter.value);

  const dispatch = useDispatch();

  const incrementBtn = (value) => {
    dispatch(increment(value))
  }
  const decrementBtn = (value) => {
     dispatch(decrement(value))
  }
   
  return (

    <>

<div className="text-center">
        <div className="bg-white border w-96 m-auto mt-5 py-5">
            
            <div className="pb-2 text-xl" >{count} </div>
            <button className=" bg-sky-400 px-3 py-2 mr-3 text-white" onClick={()=> incrementBtn(4)} >Increment</button>
            <button className="bg-red-500 px-3 py-2 text-white" onClick={()=> decrementBtn(2)}  >Decrement</button>
        </div>

    </div>
          {/* <div classNameName="max-w-md mx-auto bg-white border w-96 m-auto mt-5 py-5">
            

            <Count />
           
            <Button >Increment</Button>
            <Button >Decrement</Button>
        </div> */}
    </>
  )
}

export default Counter1