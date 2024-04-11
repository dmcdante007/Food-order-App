import React from "react";

const MealHeader = () => {
  return (
    <React.Fragment>
      <header style={{ backgroundColor: "orange", height: "200px" }}>
        <nav
          style={{
            backgroundColor: "Red",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <h1>ReactMeals</h1>
          <h3>Your Cart</h3>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default MealHeader;
