import TodoApp from "./Components/Todo/TodoApp";
import { store } from "./redux/store";
import {Provider} from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Home from "./Pages/Home";
import Error from "./Pages/Error";


function App() {
  return (
    <>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
     
     
    </>
  );
}

export default App;
