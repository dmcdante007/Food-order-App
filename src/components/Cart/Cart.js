import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import JustContext from "../UI/app-context/just-context";

const Cart = (props) => {
  const ctx = useContext(JustContext);
  let TotalAmount = 0;
  ctx.item.forEach((item) => {
    TotalAmount = TotalAmount + item.price;
  });

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {ctx.item.map((item) => (
        <li className={classes.meal}>
          <div className={classes}>
            <h3>{item.name}</h3>
            <div className={classes.price}>{item.price}</div>
            <div className={classes.quantity}>{item.quantity}</div>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartitems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{TotalAmount}</span>
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
