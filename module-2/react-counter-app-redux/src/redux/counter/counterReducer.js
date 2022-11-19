import { DECREMENT, INCREMENT } from "./actionTypes"

 const initialState = {
    value: 0
 }
 
 
 const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                value: state.value + action.payload
            }
        case DECREMENT:
            if(state.value > 0){
                return{
                    ...state,
                    value: state.value - action.payload
                }
            }
            else{
                return ""
            }
            
            
    
        default:
            return state;
    }

 }
 export default counterReducer;



 