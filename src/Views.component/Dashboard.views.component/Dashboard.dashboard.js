import React, { useState, useEffect } from "react";
import Links from "../../Components/Links/Link.component";
import Input from "../../Components/Inputs/Input.component";
import Button from "../../Components/Button/Button.component";
import styles from "./Dashboard.module.css";
import { Categories } from "../../Collection.component/Categories.carts";
import Image from "../../Components/Image/Image.component";
import WeekDay from "../../Components/Week_day/Week_day";

const Dashboard = ({ history, match }) => {
  const [girls_wears, setGirlsWears] = useState([]);
  const [boys_wears, setBoysWears] = useState([]);
  const [ladies_wears, setLadiesWears] = useState([]);
  const [men_wears, setMenWears] = useState([]);
  const [searchInput, setInput] = useState([]);

  const handleChange = ({ target }) => {
    setInput({ [target.name]: target.value });
  };
  const handleGirldWears = () => {
    const { girls } = Categories;
    let res = girls.products.filter(({ id }) => id === 1);
    setGirlsWears(res);
  };

  const handleBoysWears = () => {
    const { boys } = Categories;
    let res = boys.products.filter(({ id }) => id <= 2);

    return setBoysWears(res);
  };
  const handleLadiesWear = () => {
    const { ladies } = Categories;
    let res = ladies.products.filter(({ id }) => id === 1);
    setLadiesWears(res);
  };
  const handleMensWear = () => {
    const { men } = Categories;
    let res = men.products.filter(({ id }) => id === 1);
    setMenWears(res);
  };
  const handleSearchBarItemKeys = e => {
    e.preventDefault();
    const searchValue = searchInput.search_products;
    if (searchValue) {
      console.log(Categories[searchValue]);
      for (let values in Categories[searchValue]) {
        if (values) {
          sessionStorage.setItem(
            "foundProduct",
            JSON.stringify(Categories[searchValue][values])
          );
          history.push("/products/" + searchValue);
        } else {
          window.alert("sorry search was not found");
        }
      }
    }
  };
  const handleSearchBarItemProductName = () => {
    //getting the search value
    const searchValue = searchInput.search_products;
    let arr = []; //empty to spread the over all object into it
    //loop through the object to get the get all the products object
    for (let values in Categories) {
      let value = Categories[values].products;
      arr.push(...value); //spreading the object into an empty array
    }
    //filtered object the matches the found product name
    let searchByProductName = arr.filter(v => searchValue === v.name);
    //making sure that there have been a match
    if (searchByProductName) {
      //setting the production that matches the found product name to the storage
      sessionStorage.setItem(
        "search_by_productNames",
        JSON.stringify(searchByProductName)
      );
      //routing the route that will display the found products
      history.push("/products/" + searchValue);
      // console.log(searchByProductName);
    } else {
      return alert("search not found");
    }
  };

  const handleGirlsWearClick = ({ name }) => {
    history.push("/categories/" + name);
    console.log(match);
    alert("clicked");
  };
  useEffect(() => {
    // handleSearchBarItemProductName();
    handleGirldWears();
    handleBoysWears();
    handleLadiesWear();
    handleMensWear();
  }, []);
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_container}>
        <div className={styles.top_area}>
          <div className={styles.dashboard_logo}>
            <img
              src="https://res.cloudinary.com/hobbyluv07/image/upload/v1568425126/logo_eeviwg.jpg"
              alt="logo view "
            />
          </div>
          <div className={styles.add_product}>
            <Links url={"/"} text={"add product"} color={"blue"} />
          </div>
          <div className={styles.product_search_form}>
            <form className={styles.form} onSubmit={handleSearchBarItemKeys}>
              <Input
                type={"search"}
                name={"search_products"}
                placeholder={"search"}
                isRequired={true}
                className={styles.input}
                value={searchInput.search_products}
                onChange={handleChange}
              />
              <Button
                text={"search"}
                backgroundColor={"#9c5518"}
                // click={handleSearchBarItemProductName}
              />
            </form>
          </div>

          <div className={styles.week_day}>
            <span>
              <WeekDay />
            </span>
          </div>
        </div>
        <div className={styles.items_wrappers}>
          <div className={styles.girls}>
            <div className={styles.girl_sample_product}>
              {girls_wears.map(({ image, id, amount, name }) => {
                return (
                  <div className={styles.show_case_wrapper} key={id}>
                    <Image
                      src={image}
                      alt={image}
                      className={styles.custom_image}
                      onclick={() => handleGirlsWearClick({ name })}
                    />
                    <span className={styles.product_details}>{amount}</span>
                    <br />
                    <span className={styles.product_details}>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.boys}>
            <div className={styles.boys_sample_product}>
              {boys_wears.map(({ image, id, amount, name }) => {
                return (
                  <div className={styles.show_case_wrapper} key={id}>
                    <Image
                      src={image}
                      alt={image}
                      className={styles.custom_image}
                      onclick={() => handleGirlsWearClick({ name })}
                    />
                    <span className={styles.product_details}>{amount}</span>
                    <br />
                    <span className={styles.product_details}>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.items_b}>
          <div className={styles.ladies}>
            <div className={styles.ladies_sample_product}>
              {ladies_wears.map(({ image, id, amount, name }) => {
                return (
                  <div className={styles.show_case_wrapper} key={id}>
                    <Image
                      src={image}
                      alt={image}
                      className={styles.custom_image}
                      onclick={() => handleGirlsWearClick({ name })}
                    />
                    <span className={styles.product_details}>{amount}</span>
                    <br />
                    <span className={styles.product_details}>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.men}>
            <div className={styles.men_sample_product}>
              {men_wears.map(({ image, id, amount, name }) => {
                return (
                  <div className={styles.show_case_wrapper} key={id}>
                    <Image
                      src={image}
                      alt={image}
                      className={styles.custom_image}
                      onclick={() => handleGirlsWearClick({ name })}
                    />
                    <span className={styles.product_details}>{amount}</span>
                    <br />
                    <span className={styles.product_details}>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
