import React from "react";

import { useStateContext } from "../contexts/ContextProvider";

const Button = ({
  customClass,
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor} ${customClass}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
