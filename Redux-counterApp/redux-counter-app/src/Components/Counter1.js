import React from 'react'

const Counter1 = () => {
  return (
    <>
          <div class="bg-white border w-96 m-auto mt-5 py-5">
            <div class="pb-2 text-xl" id="counter">0</div>
            <button class=" bg-sky-400 px-3 py-2 mr-3 text-white" id="increment">Increment</button>
            <button class="bg-red-500 px-3 py-2 text-white" id="decrement">Decrement</button>
        </div>
    </>
  )
}

export default Counter1