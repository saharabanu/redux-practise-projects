import {applyMiddleware, createStore} from "redux"
import rootReducer from "./rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import stockOut from "./middlewares/stockOut";




export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(stockOut)))