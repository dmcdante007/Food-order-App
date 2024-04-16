import React, { useState } from "react";
import classes from './Input.module.css'
import JustContext from "./app-context/just-context";

const Input = (props) => {
    const [inputAmt, setinputamt]= useState('1');

    const inputAmtHandler = (e)=>{
        setinputamt(e.target.value);
    }

    return(
    <JustContext.Provider value={inputAmt}>
    <div className={classes.input}>
        <label htmlFor={props.input.id} >{props.label}</label>
        <input {...props.input} onChange={inputAmtHandler}/>
    </div>
    </JustContext.Provider>
    )
}

export default Input;