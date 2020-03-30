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
  // console.log(girls.products);
  const handleGirldWears = () => {
    const { girls } = Categories;
    let res = girls.products;
    setGirlsWears(res);
    // console.log(res);
  };
  useEffect(() => {
    handleGirldWears();
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
                alt="logo view  "
              />
            </div>
            <div className={styles.add_product}>
              <Links url={"/"} text={"add product"} />
            </div>
            <div className={styles.product_search_form}>
              <form className={styles.form}>
                <Input
                  type={"search"}
                  name={"search-products"}
                  placeholder={"search"}
                  isRequired={true}
                  className={styles.input}
                  // value={''}
                />
                <Button text={"search"} backgroundColor={"inherit"} />
              </form>
            </div>

            <div className={styles.week_day}>
              <span>week_day</span>
            </div>
          </div>
          <div className={styles.girls}>
            <div className={styles.Categories_names}>
              <h3>girls wears</h3>
            </div>
            <div className={styles.girl_sample_product}>
              {girls_wears.map(products => (
                <Image
                  src={products.image}
                  alt={products.image}
                  key={products.id}
                  className={styles.custom_image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
