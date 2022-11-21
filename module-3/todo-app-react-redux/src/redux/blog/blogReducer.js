import { getBlogs } from "./blogActions";
import { initialState } from "./blogInitialState";

 

 const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case getBlogs:
            return{
                ...state,
                blogs: [...state.blogs, action.payload]
            }
            
            
    
        default:
            return state
    }
 }
 export default blogReducer;