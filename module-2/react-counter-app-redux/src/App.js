import { Provider } from "react-redux";
import Counter1 from "./Components/Counter1";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import CartTotal from "./Components/ShoppingCart/Cart/CartTotal";
import Products from "./Components/ShoppingCart/Products/Products";
import { store } from "./redux/store";


function App() {
  return (
    <>
    <Provider store={store}>
      {/* <div className=" text-center w-screen  ">
        <h2 className="max-w-md mx-auto text-2xl font-bold mt-10">Simple Counter Application</h2>
       <Counter1/>
       <Counter1/>
      


       </div> */}
       <div className="bg-gray-50 h-full md:h-screen">
        <div className=" grid place-items-center">
          <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
            Shopping Cart
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {/* Product List of the Shop */}
          <Products/>
          

          <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            {/* Cart with added products*/}
            <Cart/>

            {/* Total Price of All the added Products to the cart*/}
            <CartTotal/>
          </div>
        </div>
      </div>
    </Provider>
    </>
  )
    
}

export default App;
