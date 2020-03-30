import React from "react";
import { Link } from "react-router-dom";
const Links = ({ url, text, className, textDecoration }) => (
  <Link
    to={url}
    className={className}
    style={{ textDecoration: textDecoration ? textDecoration : "none" }}
  >
    {text ? text : "am here to navigate"}
  </Link>
);

export default Links;
