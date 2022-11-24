import { todosInitialState } from "./todoInitialState";
import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORESELECTED, DELETED, LAODED, TOGGLED, UPDATEDTEXT } from "./todosActionType";

// to get maxid of todo id
 const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo)=> Math.max(todo.id , maxId), -1);
    return maxId + 1;
 }
const todosReducer = (state= todosInitialState,action)=> {
    switch (action.type) {
        case LAODED:
            return  action.payload.todos;

        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload.todoText,
                    completed: false

                    
                }

            ]
        case TOGGLED:
            return state.map((todo)=>{
                if(todo.id !== action.payload.todoId){
                    return todo

                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        case COLORESELECTED:
            const { color, todoId} = action.payload;
            return state.map((todo)=>{
                if(todo.id !== todoId){
                    return todo

                }
                return {
                    ...todo,
                    color: color
                }
            })
        case DELETED:
            return state.filter((todo) => todo.id !== action.payload.todoId)

            
        case ALLCOMPLETED:
            return state.map((todo) => {
                return {
                    ...todo,
                    completed: true
                }
            })
        case CLEARCOMPLETED:
            return state.filter((todo) => !todo.completed );


            case UPDATEDTEXT:
            return state.map((todo)=>{
                if(todo.id !== action.payload.todoId){
                    return todo

                }
                return {
                    ...todo,
                    text: action.payload.text
                };
            });
            
    
        default:
            return state
    }
}

export default todosReducer;