import React from "react";

const Label = ({ labelFor, text, className, color }) => (
  <div className="custom_label" style={{ color: color ? color : null }}>
    <label
      htmlFor={labelFor}
      className={className ? className : null}
      style={{ color: color ? color : null }}
    >
      {text}
    </label>
  </div>
);
export default Label;
