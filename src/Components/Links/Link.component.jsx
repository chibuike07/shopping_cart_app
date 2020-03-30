import React from "react";
import { Link } from "react-router-dom";
const Links = ({
  url,
  text,
  className,
  textDecoration,
  color,
  textTransform
}) => (
  <Link
    to={url}
    className={className}
    style={{
      textDecoration: textDecoration ? textDecoration : "none",
      color: color ? color : "#fff",
      textTransform: textTransform ? textTransform : null
    }}
  >
    {text ? text : "am here to navigate"}
  </Link>
);

export default Links;
