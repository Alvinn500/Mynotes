import React from "react";

const Button = (props) => {
  const { children, type, onClick = () => {}, className } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
      // onClick={onDelete}
      // onArcive={onArcive}
    >
      {children}
    </button>
  );
};

export default Button;
