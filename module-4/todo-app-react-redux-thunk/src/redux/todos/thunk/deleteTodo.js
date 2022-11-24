import { deleted } from "../todosAction";

const deleteTodo = (todoId, color) =>async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
        method: "DELETE"
    }
    
      
    );

    
    dispatch(deleted(todoId ))

}

export default deleteTodo;