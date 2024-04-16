import React, { useState } from "react";
import JustContext from "./just-context";

const CartProvider = (props)=>{
    const [items, updateItems] = useState([]);


    const additemToCartHandler = (i) => {
        updateItems([...items, i])
    }
    const removeItemFromCartHandler = (id)=> {}



    const cartContext = {
        item: items,
        addItem: additemToCartHandler,
        removeItem: removeItemFromCartHandler,
        // message: 'I am accessible?',
    }

    return <JustContext.Provider value={cartContext}>
        {props.children}
    </JustContext.Provider>
}

export default CartProvider;