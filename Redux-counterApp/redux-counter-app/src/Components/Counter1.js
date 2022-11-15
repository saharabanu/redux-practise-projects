import React, { useState } from 'react'
import Button from './Button';
import Count from './Count';

const Counter1 = ({id,count, incrementBtn, decrementBtn}) => {
   
  return (
    <>
          <div className="max-w-md mx-auto bg-white border w-96 m-auto mt-5 py-5">
            

            <Count count={count}/>
           
            <Button handler={()=>incrementBtn(id)}>Increment</Button>
            <Button handler={()=>decrementBtn(id)}>Decrement</Button>
        </div>
    </>
  )
}

export default Counter1