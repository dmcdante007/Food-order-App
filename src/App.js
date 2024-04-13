import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import JustContext from "./components/UI/app-context/just-context";

function App() {
  const [viewIt, setViewit] = useState(false);
  const handlerofView = ()=>{
    setViewit(false)
  }

  return (
    <JustContext.Provider value={{viewis: handlerofView}}>
      {viewIt && <Cart/>}
      <Header onClickingcart= {setViewit}/>
      <main>
      <Meals/>
      </main>
    </JustContext.Provider>
  );
}

export default App;
