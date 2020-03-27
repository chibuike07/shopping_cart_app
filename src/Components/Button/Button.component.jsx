import React from "react";
// const handleSubmit = () => {

// }
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
        color: color ? color : "#ffff"
      }}
      onClick={() => (click ? click : null)}
      onSubmit={() => (handleSubmit ? handleSubmit : null)}
      {...(otherButtonProps ? { ...otherButtonProps } : null)}
      className={className}
    >
      {text ? text : "click"}
    </button>
  </div>
);

export default Button;
