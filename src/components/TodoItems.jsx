"use client";
import { useState } from "react";


const TodoItems = ({text , number}) => {
    const [ isCompleted , setIsCompleted ] = useState(false);

    const handleClick = () => {
        setIsCompleted(!isCompleted);
    }

  return (
    <div onClick={handleClick} className={`todo-item cursor-pointer ${isCompleted && 'strike'}`}>
      <span>{number}</span>
      <div>{text}</div>
    </div>
  );
};

export default TodoItems;
