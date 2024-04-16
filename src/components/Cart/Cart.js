import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import JustContext from "../UI/app-context/just-context";

const Cart = (props) => {
  const ctx = useContext(JustContext);
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {ctx.item.map((item) => (
        <li>
          Name:{item.name} Price: {item.price} Quantity: {item.quantity}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartitems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
