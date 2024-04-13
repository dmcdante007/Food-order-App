import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
    const handlerModle =()=>{
        props.onCart(true)
    }

    return <React.Fragment>
    <button className={classes.button} onClick={handlerModle}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span >Your Cart</span>
        <span className={classes.badge}> 
            3
        </span>
    </button>
    </React.Fragment> 
}

export default HeaderCartButton