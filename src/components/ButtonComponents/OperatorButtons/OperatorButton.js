import React from "react";

export const OperatorButton = props => {
  return (
    <button className="operator_button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.button.value}
    </button>
  );
};
