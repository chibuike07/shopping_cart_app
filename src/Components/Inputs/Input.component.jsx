import React from "react";

const Input = ({
  name,
  onChange,
  placeholder,
  value,
  isRequired,
  type,
  className,
  outLine,
  id,
  paddingLeft,
  border,
  borderRadius,
  width,
  height,
  borderTop,
  borderBottom,
  backgroundColor,
  color,
  opacity
  // ref
}) => (
  <input
    style={{
      outline: outLine ? outLine : "none",
      paddingLeft: paddingLeft ? paddingLeft : null,
      width: width ? width : null,
      border: border ? border : null,
      borderRadius: borderRadius ? borderRadius : null,
      borderTop: borderTop ? borderTop : null,
      borderBottom: borderBottom ? borderBottom : null,
      height: height ? height : null,
      color: color ? color : null,
      backgroundColor: backgroundColor ? backgroundColor : null,
      opacity: opacity ? opacity : null
    }}
    type={type ? type : "text"}
    placeholder={placeholder}
    onChange={onChange}
    value={value ? value : ""}
    className={className ? className : "custom-input"}
    name={name}
    required={isRequired}
    id={id ? id : null}
    // ref={ref ? ref : null}
  />
);
export default Input;
