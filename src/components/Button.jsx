import React from "react";

const Button = ({ classNames, text, onClick }) => {
  return (
    <button className={`bg-gold font-bold py-3 px-8 text-white rounded-2xl
     transition-all duration-100 hover:bg-gold/85 cursor-pointer 
    ${classNames}`}
    onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
