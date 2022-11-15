import { useState } from "react";
import Counter1 from "./Components/Counter1";
import Stat from "./Components/Stat";


const initialState = [
  {id: 1,
  count:0
  },
  {id: 2,
  count:0
  }
]
function App() {
  const [state,  setState] = useState(initialState);

const total = () => {
  return state.reduce((total, counter) => total + counter.count, 0 )
};

const incrementBtn = (id) => {
  const updateCounter = state.map((c) => {
    if(c.id === id){
      return {
        ...c,
        count: c.count + 1
      }
    }
    return {...c}
  })
  
  setState(updateCounter)
}
const decrementBtn = (id) => {
  const updateCounter = state.map((c) => {
    if(c.id === id){
      if(c.count > 0){
      return {
        ...c,
       
        count: c.count - 1
       
      }
    }
    }
    return {...c}
  })
  
  setState(updateCounter)
//  if(count > 0) {
//   setCount((previous) => previous - 1)
//  }
}
  return (
    <>
       <div className=" text-center w-screen  ">
        <h2 className="max-w-md mx-auto text-2xl font-bold mt-10">Simple Counter Application</h2>
       <Stat count={total()}/>
      {state.map((count)=>(
        <Counter1 
        key={count.id}
        count={count.count}
        id={count.id}
        incrementBtn={incrementBtn} decrementBtn={decrementBtn}

        />
      ))}
      {/* <Counter1 incrementBtn={incrementBtn} decrementBtn={decrementBtn}/>
      <Counter1 incrementBtn={incrementBtn} decrementBtn={decrementBtn}/> */}


    </div>
    </>
  );
}

export default App;
