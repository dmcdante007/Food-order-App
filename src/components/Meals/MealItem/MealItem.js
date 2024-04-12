import React, { useState } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
const onClickHandler =()=>{
    React.createportal()
}
  return (
    <li className={classes.meal}>
      <div className={classes}>
        <h3>{props.name}</h3>

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm onClickingAdd={onClickHandler} />
    </li>
  );
};

export default MealItem;
