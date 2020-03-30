import React from "react";
import Button_Styles from "./Button.module.css";
// const handleSubmit = () => {

// }
const { button } = Button_Styles;
const Button = ({
  color,
  backgroundColor,
  click,
  text,
  handleSubmit,
  className,

  ...otherButtonProps
}) => (
  <div className="button">
    <button
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "red",
        color: color ? color : "#fff"
      }}
      onClick={() => (click ? click : null)}
      onSubmit={() => (handleSubmit ? handleSubmit : null)}
      {...(otherButtonProps ? { ...otherButtonProps } : null)}
      className={className ? className : button}
    >
      {text ? text : "click"}
    </button>
  </div>
);

export default Button;
