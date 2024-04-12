import React from "react";
import classes from './MealItemForm.module.css'

const MealItemForm = (props)=>{

    return <div>
    Amount{props.countis}<br/>
    <button onClick={props.onClickingAdd}>+Add</button>
</div>
}

export default MealItemForm;