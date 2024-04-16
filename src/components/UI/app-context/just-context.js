import React from "react";

const JustContext = React.createContext({
    item: [],
    totalAmount: 0,
    addItem: (item)=>{},
    removeitem: (id)=>{},
    
})

export default JustContext;