import React, { useState, useEffect } from "react";
import headerStyles from "./Header.module.css";
import Links from "../Links/Link.component";
import calenderIcon from "../../Asset.component/time.svg";
import Image from "../Image/Image.component";
import CartIcon from "../../Asset.component/plus-cart.png";
import Button from "../Button/Button.component";
const Header = ({ history }) => {
  const {
    header_wrapper,
    nav_wrapper,
    header_container,
    calender,
    cart,
    user_image,
    signin_toggle
  } = headerStyles;
  const [userImage, setUserImage] = useState([]);
  const [signOut, setSignOut] = useState("logout");
  const LoggerImg = () => {
    const storage = JSON.parse(sessionStorage.getItem("userObject"));
    if (storage) {
      let res = storage.img;
      setUserImage(res);
    }
  };
  const handleSignOut = () => {
    sessionStorage.removeItem("userObject");
    window.location.replace("/");
  };
  useEffect(() => {
    LoggerImg();
  });
  return (
    <div className={header_wrapper}>
      <div className={header_container}>
        <div className={nav_wrapper}>
          <Links text={"Home"} url={"/"} />
          <Links text={"Products"} url={"/"} />
          <Links text={"About"} url={"/"} />
          <Links text={"Pages"} url={"/"} />
          <Links text={"Blog"} url={"/"} />
          <Links text={"Contact"} url={"/"} />
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
          />
        </div>
        <div className={user_image}>
          <Image
            src={userImage}
            alt={"logger image"}
            width={"50px"}
            height={"50px"}
            padding={"5px 0 0 0"}
          />
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
export default Header;
