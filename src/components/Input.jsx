import React from "react";

const Input = ({label , type}) => {
  return (
    <div className="input-container">
      <label>{label} : </label>
      <input type={type} />
    </div>
  );
};

export default Input;
