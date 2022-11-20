import TodoApp from "./Components/Todo/TodoApp";
import { store } from "./redux/store";
import {Provider} from "react-redux"


function App() {
  return (
    <>
    <Provider store={store}>
     <TodoApp/>
     </Provider>
    </>
  );
}

export default App;
