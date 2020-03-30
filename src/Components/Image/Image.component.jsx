import React from "react";
import ImageStyles from "./Image.module.css";
const Image = ({ className, width, height, src, alt }) => {
  const { custom_image, custom_image_wrapper } = ImageStyles;
  return (
    <div className={custom_image_wrapper}>
      <img
        style={{
          width: width ? width : null,
          height: height ? height : "null"
        }}
        src={src}
        alt={alt}
        className={className ? className : custom_image}
      />
    </div>
  );
};

export default Image;
