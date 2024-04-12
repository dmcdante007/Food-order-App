import React, { useState } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const[count, setCount] = useState()
  const price = `$${props.price.toFixed(2)}`;
const onClickHandler =()=>{
    const cal = count +1
    setCount(cal)
}
  return (
    <li className={classes.meal}>
      <div className={classes}>
        <h3>{props.name}</h3>

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm onClickingAdd={onClickHandler} countis ={count}/>
    </li>
  );
};

export default MealItem;
