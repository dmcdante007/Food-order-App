import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import CartProvider from "./components/UI/app-context/cart-context";
function App() {
  const [viewIt, setViewit] = useState(false)

  const hideCArtHanler =()=>{
    setViewit(false);
  }

  const showCartHandler =()=>{
    setViewit(true);
  }
  return (
    <CartProvider>
      {viewIt && <Cart onClose={hideCArtHanler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
