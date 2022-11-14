const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");


// event listener 

let count = 0;
increment.addEventListener('click', ()=> {
     count++;
     counter.innerText = count
})
decrement.addEventListener('click', ()=> {
    if(count > 0){
        count--;
        counter.innerText = count;
    }
    else{
        counter.innerText = 'decrement not possible after 0'
    }
  
})