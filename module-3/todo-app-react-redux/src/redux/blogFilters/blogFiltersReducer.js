
import { FILTERBYCATEGORY, FILTERBYNAME, FILTERBYSEARCH } from "./blogFilterActionType";
import { initialState } from "./blogFilterInitialState";


const blogFiltersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTERBYCATEGORY:
            return {
                ...state,
                category: action.payload.category
            }
        case FILTERBYNAME:
            return {
                ...state,
                name: action.payload.name
            }

        
            
        case FILTERBYSEARCH:
            return {
                ...state,
                search: action.payload.search
            }

    
        default:
            return state 
    }
}
export default blogFiltersReducer;