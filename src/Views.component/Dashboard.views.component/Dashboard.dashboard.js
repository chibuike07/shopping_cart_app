import React, { useState, useEffect } from "react";
import Links from "../../Components/Links/Link.component";
import Input from "../../Components/Inputs/Input.component";
import Button from "../../Components/Button/Button.component";
import styles from "./Dashboard.module.css";
import SideBar from "./Sidebar.dashboard.component/Sidebar.dashboard.component";
import { Categories } from "../../Collection.component/Categories.carts";
import Image from "../../Components/Image/Image.component";
const Dashboard = () => {
  const [girls_wears, setGirlsWears] = useState([]);
  const [boys_wears, setBoysWears] = useState([]);
  const [ladies_wears, setLadiesWears] = useState([]);
  const [men_wears, setMenWears] = useState([]);

  const handleGirldWears = () => {
    const { girls } = Categories;
    let res = girls.products.filter(({ id }) => id <= 3);
    setGirlsWears(res);
  };
  const handleBoysWears = () => {
    const { boys } = Categories;
    let res = boys.products.filter(({ id }) => id <= 3);
    setBoysWears(res);
  };
  const handleLadiesWear = () => {
    const { ladies } = Categories;
    let res = ladies.products.filter(({ id }) => id <= 3);
    setLadiesWears(res);
    // console.log(res);
  };
  const handleMensWear = () => {
    const { men } = Categories;
    let res = men.products.filter(({ id }) => id <= 3);
    setMenWears(res);
    // console.log(res);
  };
  useEffect(() => {
    handleGirldWears();
    handleBoysWears();
    handleLadiesWear();
    handleMensWear();
  }, []);
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_container}>
        <SideBar />
        <div className={styles.aside_container}>
          <div className={styles.headings}>
            <h2>welcome to the internet of body wears</h2>
            <p>have enough to get and share with friends </p>
            <p>how re u doing</p>
          </div>
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
              <form className={styles.form}>
                <Input
                  type={"search"}
                  name={"search-products"}
                  placeholder={"search"}
                  isRequired={true}
                  className={styles.input}
                />
                <Button text={"search"} backgroundColor={"#9c5518"} />
              </form>
            </div>

            <div className={styles.week_day}>
              <span>week_day</span>
            </div>
          </div>
          <div className={styles.girls}>
            <div className={styles.Categories_names}>
              <h3>Girls wears</h3>
            </div>
            <div className={styles.girl_sample_product}>
              {girls_wears.map(({ image, id, amount, name }) => {
                return (
                  <div className={styles.show_case_wrapper} key={id}>
                    <Image
                      src={image}
                      alt={image}
                      className={styles.custom_image}
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
            <div className={styles.Categories_names}>
              <h3>Boys wears</h3>
            </div>
            <div className={styles.boys_sample_product}>
              {boys_wears.map(({ image, id, amount, name }) => {
                return (
                  <div className={styles.show_case_wrapper} key={id}>
                    <Image
                      src={image}
                      alt={image}
                      className={styles.custom_image}
                    />
                    <span className={styles.product_details}>{amount}</span>
                    <br />
                    <span className={styles.product_details}>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.ladies}>
            <div className={styles.Categories_names}>
              <h3>ladies wears</h3>
            </div>
            <div className={styles.ladies_sample_product}>
              {ladies_wears.map(({ image, id, amount, name }) => {
                return (
                  <div className={styles.show_case_wrapper} key={id}>
                    <Image
                      src={image}
                      alt={image}
                      className={styles.custom_image}
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
            <div className={styles.Categories_names}>
              <h3>men wears</h3>
            </div>
            <div className={styles.men_sample_product}>
              {men_wears.map(({ image, id, amount, name }) => {
                return (
                  <div className={styles.show_case_wrapper} key={id}>
                    <Image
                      src={image}
                      alt={image}
                      className={styles.custom_image}
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
      </div>
    </div>
  );
};

export default Dashboard;
