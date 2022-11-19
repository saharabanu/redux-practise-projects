import counterReducer from "./counter/counterReducer";
import {applyMiddleware, createStore} from "redux"
import rootReducer from "./rootReducer";
// import { myLogger } from "./middlewares/myLogger";
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';




export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))