import React from "react";

export const SpecialButton = props => {
  return (
    <button onClick={()=> props.updateDisplay(props.button)} className="special_button calc_button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.button}
    </button>
  );
};

export default SpecialButton;
