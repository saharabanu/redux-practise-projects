const {createStore, applyMiddleware} = require("redux");

const { fetchTodos } = require("./utils");
const thunk = require("redux-thunk");



const initialState = {
    todos: []
};


const todoReducer = (state = initialState, action) => {
        switch (action.type) {
            case "todoAdded":
                return {
                    ...state,
                    todos: [
                        ...state.todos,
                        {
                            title: action.payload
                        },
                    ]
                };
        
            case "todoLoaded":
                return {
                    ...state,
                    todos: [
                        ...state.todos, ...action.payload
                        
                    ]
                };
        
            default:
                return state;
        }
}


// store 
const store = createStore(todoReducer, applyMiddleware(thunk.default));


// subscribe  
store.subscribe(() => {
    console.log(store.getState());
});


// dispatch action  

// store.dispatch({
//     type: "todoAdded",
//     payload: "learn React Redux"
// });
store.dispatch(fetchTodos);

