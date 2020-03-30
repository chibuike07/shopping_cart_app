import React, { useState, useEffect } from "react";
import Logo from "../../../Asset.component/bgFoto.jpg";
import SidebarStyles from "./Sidebar.module.css";
import { optionArray } from "../../../Collection.component/Side_bar_options_array";
import Lists from "../../../Components/Lists/List.component";
import Links from "../../../Components/Links/Link.component";
const SideBar = () => {
  const {
    option,
    option_container,
    image,
    user_identity,
    dropDown,
    option_list,
    list
  } = SidebarStyles;
  const [options, setOptions] = useState([]);
  const handleOptions = () => {
    setOptions(optionArray);
  };
  useEffect(() => {
    handleOptions();
  }, []);

  console.log(options);
  return (
    <div className={option}>
      <div className={option_container}>
        <div className={image}>
          <img src={Logo} alt="display_pix" />
        </div>
        <div className={user_identity}>
          <p>username</p>
          <address>email</address>
        </div>
        <div className={dropDown}>
          <ul className={option_list}>
            {options.map((option, index) => (
              <Lists
                key={index}
                text={
                  <Links url={"/"} text={option} textTransform={"capitalize"} />
                }
                marginTop={"13px"}
                className={list}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
