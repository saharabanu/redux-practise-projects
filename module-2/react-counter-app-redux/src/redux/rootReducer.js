import { combineReducers } from "redux"
import cartReducer from "./cart/cartReducer";
import counterReducer from "./counter/counterReducer"
import productsReducer from "./product/productReducer";


const rootReducer = combineReducers({
    counter: counterReducer,
    products: productsReducer,
    cart: cartReducer
})

export default rootReducer;