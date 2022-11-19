import { initialState } from "./initialState";
import { ADD_TO_CART_FIRST, DECREASE_TO_CART } from "./productActionType";




const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART_FIRST:
            return{
                ...state,
               products: state.products.map((product)=>{
                if(product.id === action.payload.id) {
                    return{
                        ...product,
                        productQuantity: product.productQuantity - action.payload.quantity
                    }

                }
                else {
                    return product;
                  }
               })
            }
        case DECREASE_TO_CART:
            return{
                ...state,
               products: state.products.map((product) => {
                if(product.id === action.payload.id) {
                    return{
                        ...product,
                        productQuantity: product.productQuantity + action.payload.quantity
                    }

                }
                else {
                    return product;
                  }
               })
            }
            
    
        default:
            return state;
    }

}

export default productsReducer;