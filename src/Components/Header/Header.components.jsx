import React, { useState, useEffect } from "react";
import headerStyles from "./Header.module.css";
import calenderIcon from "../../Asset.component/time.svg";
import Image from "../Image/Image.component";
import CartIcon from "../../Asset.component/plus-cart.png";
import Button from "../Button/Button.component";
import NavLinks from "../NavLinks/Navlinks.component";
import Links from "../Links/Link.component";
import { NavbarLinksArray } from "../../Collection.component/Navbar.links.array";
import { withRouter } from "react-router-dom";
const Header = ({ history }) => {
  const {
    header_wrapper,
    nav_wrapper,
    header_container,
    calender,
    cart,
    user_image,
    signin_toggle
  } = headerStyles; //destructuring of the styles modules
  const [loggerDatas, setUserImage] = useState([]);
  const [signOut, setSignOut] = useState("logout");
  const LoggerDAta = () => {
    const storage = JSON.parse(sessionStorage.getItem("userObject")); //get the login users token
    if (storage) {
      //check if sessionStorage is null
      setUserImage(prev => [...prev, storage]); //setting the token to the state
    }
  };
  const handleSignOut = () => {
    //function for signing out of the dashboard
    sessionStorage.removeItem("userObject"); //clearing the user token from the sessionstorage
    window.location.replace("/"); //redirecting to the registere page
  };
  const handleClick = () => {
    //function for products previews
    history.push("/categories"); //routing to the categories page
  };
  useEffect(() => {
    LoggerDAta();
  }, []);
  return (
    <div className={header_wrapper}>
      <div className={header_container}>
        <div className={nav_wrapper}>
          {NavbarLinksArray && // checking if navigations array exist
            NavbarLinksArray.map((
              navDatas,
              i //map through the navigation arrays
            ) => (
              <NavLinks //rendering the array paths into the navlins
                text={navDatas}
                url={"/" + navDatas.toLocaleLowerCase()}
                key={i}
              />
            ))}
        </div>
        <div className={calender}>
          <Image
            src={calenderIcon}
            alt={"calender icon"}
            width={"40px"}
            height={"30px"}
          />
        </div>
        <div className={cart}>
          <Image
            src={CartIcon}
            alt={"cart image"}
            width={"40px"}
            height={"30px"}
            onclick={handleClick}
          />
        </div>
        <div className={user_image}>
          {loggerDatas.length && //check if user is login
            loggerDatas.map((userData, i) => (
              <Links
                text={
                  <Image
                    src={userData.img}
                    alt={"logger image"}
                    width={"50px"}
                    height={"50px"}
                    padding={"5px 0 0 0"}
                  />
                }
                url={"/dashboard/" + userData.username} //setting the url paths
                key={i}
              />
            ))}
        </div>
        <div className={signin_toggle}>
          <Button
            click={handleSignOut}
            text={signOut}
            backgroundColor={"inherit"}
          />
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
