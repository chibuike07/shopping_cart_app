import React from "react";
import { Link } from "react-router-dom";
const Links = ({ url, text, className }) => (
  <Link to={url} className={className}>
    {text ? text : "am here to navigate"}
  </Link>
);

export default Links;
