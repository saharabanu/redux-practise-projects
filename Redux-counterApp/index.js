// select dom element 
const counter = document.getElementById("counter");
const incrementElm = document.getElementById("increment");
const decrementElm = document.getElementById("decrement");
const totalCountElm = document.getElementById("total");

// initial state 
const initialState = {
    value: 0,
    total:0
    
}

// action indentifier 
const INCREMENT ="increment";
const DECREMENT ="decrement";
const TOTAl ="totalCount";


// action creator
const increment = (value) => {
  return {
      type:INCREMENT,
      payload: value
    
  }
}
const decrement = (value) => {
  return {
      type:DECREMENT,
      payload: value
    
  }
}
const total = (value) => {
  return {
      type:TOTAl,
      payload: value
    
  }
}

// declare  function reducer 

const counterReducer = (state = initialState, action) => {
    if(action.type === INCREMENT){
        return {
            ...state,
            value: state.value + action.payload,
        }

    }
    else if(action.type === DECREMENT){
        if(state.value >= 0){
            return {
                ...state,
                value: state.value - action.payload,
            }
        }
        else{
            alert("you can't add negative value")
        }

    }
    // else if(action.type === TOTAl){
    //    return{
    //     ...state,
    //     value: state.reduce((total, initialState)=> initialState
    //     ,0)
    //    }

    // }
    else{
        return state
    }
}

// store declare 
const store = Redux.createStore(counterReducer);


// ui render  
const render = () => {
    const state = store.getState();
    counter.innerText = state.value.toString();
    totalCountElm.innerText = state.value.toString();
}
// upadate ui initially

render();
store.subscribe(render)




// add eventlistener 
incrementElm.addEventListener('click', ()=> {
    store.dispatch(increment(5))
})
decrementElm.addEventListener('click', ()=> {
    store.dispatch(decrement(3))
 
})



// array 

// const numbers = [11, 2, 3, 4,5, 6, 7, 8, 9, 77, 54,90]
// const result = numbers.reduce((total, number) => {
//    return total + number
// }, 0)
//  console.log(result);

const numbers = [11, 2, 3, 4,5, 6, 7, 8, 9, 77, 54,90];


// const numb = numbers.map(number => {
//     return number * 5
// });
// console.log(numb);

const newNumbersArray = [...numbers, 55, 66, 77, 33]
// console.log(typeof newNumbersArray);