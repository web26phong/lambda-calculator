import React from "react";

export const SpecialButton = props => {
  return (
    <button className="special_button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.button}
    </button>
  );
};

export default SpecialButton;
