import React from "react";

const Label = ({ labelFor, text }) => (
  <div className="custom_label">
    <label htmlFor={labelFor}>{text}</label>
  </div>
);
export default Label;
