import { ALLCOMPLETED, CLEARCOMPLETED, COLORESELECTED, DELETED, TOGGLED , ADDED, LAODED, UPDATEDTEXT} from "./todosActionType"

// loaded data from api action function 

export const loaded = (todos) => {
    return{
        type:LAODED,
        payload:{
            todos
        }
    }
}; 
 // added data from api action function 
export const added = (todoText) => {
    return{
        type:ADDED,
        payload:{
            todoText
        }
    }
};
// edit data from api action function 
export const edited = (todoId, text) => {
    return{
        type:UPDATEDTEXT,
        payload:{
            todoId,
            text
        }
    }
};
// toggled data from api action function 
export const toggled = (todoId) => {
    return{
        type:TOGGLED,
        
        payload:{
            todoId
        }
    }
};
// colorselected data from api action function 

export const colorSelected = (todoId, color) => {
    return{
        type:COLORESELECTED,
        payload:{
            todoId,
            color
        }
    }
};
// deleted data from api action function 
export const deleted = (todoId) => {
    return{
        type:DELETED,
        payload: {
            todoId
        }
    }
};
// allCompleted data from api action function 
export const allCompleted = () => {
    return{
        type:ALLCOMPLETED,
        
    }
};
// clearCompleted data from api action function 
export const clearCompleted = () => {
    return{
        type:CLEARCOMPLETED,
        
    }
};