import React from "react";

const Input = ({
  name,
  onChange,
  placeholder,
  value,
  isRequired,
  type,
  className,
  outLine
}) => (
  <input
    style={{ outline: outLine ? outLine : "none" }}
    type={type ? type : "text"}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    className={className ? className : "custom-input"}
    name={name}
    required={isRequired}
  />
);
export default Input;
