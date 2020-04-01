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
  height
}) => (
  <input
    style={{
      outline: outLine ? outLine : "none",
      paddingLeft: paddingLeft ? paddingLeft : null,
      width: width ? width : null,
      border: border ? border : null,
      borderRadius: borderRadius ? borderRadius : null,
      height: height ? height : null
    }}
    type={type ? type : "text"}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    className={className ? className : "custom-input"}
    name={name}
    required={isRequired}
    id={id ? id : null}
  />
);
export default Input;
