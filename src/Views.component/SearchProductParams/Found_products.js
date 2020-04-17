import React, { useState, useEffect } from "react";
import Image from "../../Components/Image/Image.component";
import SearchProductParamsStyles from "./ProductFound.module.css";
const FoundProducts = () => {
  const [wantedProduct, setWantedProduct] = useState([]);
  const { display, items } = SearchProductParamsStyles;
  const found = () => {
    const foundProduct = JSON.parse(sessionStorage.getItem("foundProduct"));

    let items = foundProduct.filter(searchItems => {
      return searchItems.id < 11;
    });
    console.log(items);
    setWantedProduct(items);
  };
  useEffect(() => {
    found();
  }, []);
  const productViews =
    wantedProduct && wantedProduct ? (
      wantedProduct.map(({ name, amount, image, id }) => (
        <div key={id} className={items}>
          <Image src={image} alt={image} />
          <div>{name}</div>
          <div>{amount}</div>
        </div>
      ))
    ) : (
      <div>hello</div>
    );
  return <div className={display}>{productViews}</div>;
};
export default FoundProducts;
