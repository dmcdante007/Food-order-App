import React from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Real-Meals</h1>
        <HeaderCartButton onTouch={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of dishes" />
      </div>
    </React.Fragment>
  );
};

export default Header;
