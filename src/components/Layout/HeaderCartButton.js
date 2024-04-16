import React, { useContext, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import JustContext from "../UI/app-context/just-context";
const HeaderCartButton = (props) => {
  const cartctx = useContext(JustContext);
  let quantity = 0;
  cartctx.item.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });
  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.onTouch}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{quantity}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
