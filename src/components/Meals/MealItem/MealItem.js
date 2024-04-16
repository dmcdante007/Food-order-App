import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import JustContext from "../../UI/app-context/just-context";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(JustContext)
  
  
  return (
    <li className={classes.meal}>
      <div className={classes}>
        <h3>{props.name}</h3>

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
        {/* {console.log(props)} */}
      <MealItemForm id={props.id} item= {props} />
    </li>
  );
};

export default MealItem;
