import React, { useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { createPortal } from "react-dom";

const MealItemForm = (props) => {
    

  return (
    <form className={classes.form}>
        
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button onClick={()=>setpopUp(true)}>+Add</button>
      
    </form>
  );
};

export default MealItemForm;
