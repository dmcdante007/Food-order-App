import React, { useContext, useEffect } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import JustContext from "../../UI/app-context/just-context";

const MealItemForm = (props) => {
    const ctx = useContext(JustContext);

    const addItemtoCart = (event)=> {
        const quantity = document.getElementById("amount_" +props.id).value
        event.preventDefault();
        ctx.addItem({...props.item, quantity:quantity});
        console.log(ctx)
    }

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" +props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button onClick={addItemtoCart}>+Add</button>
    </form>
  );
};

export default MealItemForm;
