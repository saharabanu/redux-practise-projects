import { edited } from "../todosAction";


const updateText = (todoId, text) => async(dispatch) => {

    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {

    method: "PATCH",
    body: JSON.stringify({
        text: text
    }),
      headers: {
        "Content-type": "application/json ; charset = UTF-8"
      }
    });
    await response.json();
    dispatch(edited(todoId, text));

}

export default updateText;