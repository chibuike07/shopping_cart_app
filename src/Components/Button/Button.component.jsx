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
  width,
  outline,
  margin,
  padding,
  border,
  borderRadius
}) => (
  <div className="button">
    <button
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "red",
        color: color ? color : "#fff",
        width: width ? width : null,
        outline: outline ? outline : null,
        margin: margin ? margin : null,
        padding: padding ? padding : null,
        border: border ? border : null,
        borderRadius: borderRadius ? borderRadius : null
      }}
      onClick={click ? click : null}
      onSubmit={handleSubmit ? handleSubmit : null}
      className={className ? className : button}
    >
      {text ? text : "click"}
    </button>
  </div>
);

export default Button;
