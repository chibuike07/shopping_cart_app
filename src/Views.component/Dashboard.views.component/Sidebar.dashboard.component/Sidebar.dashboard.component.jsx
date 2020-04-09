import React, { useState, useEffect } from "react";
import SidebarStyles from "./Sidebar.module.css";
import { optionArray } from "../../../Collection.component/Side_bar_options_array";
import Lists from "../../../Components/Lists/List.component";
import Links from "../../../Components/Links/Link.component";
import Image from "../../../Components/Image/Image.component";

//function for the side bar
const SideBar = ({ loginUser }, data) => {
  //destructuring props
  const {
    // destructuring styles
    option,
    option_container,
    image,
    user_identity,
    dropDown,
    option_list,
    list
  } = SidebarStyles;
  const [options, setOptions] = useState([]); //destructuring state and set state from useState for side bar options
  const [loginUserdata, setLoginUserData] = useState([]);

  //function to handle the side bar options
  const handleOptions = () => {
    setOptions(optionArray);
  };
  // function to handle the login user data
  const logger = () => {
    setLoginUserData(loginUser);
  };

  useEffect(() => {
    //setting the components to load the options array to the side bar and fetch the user data from the session storage on componentdidmount
    handleOptions();
    logger();
  });
  const handleOptionClick = ({ target }) => {
    console.log(target.text);
  };
  return (
    <div className={option}>
      <div className={option_container}>
        <div className={image}>
          {loginUserdata.map(({ img }, i) => (
            <Image src={img} alt={"user image"} key={i} />
          ))}
        </div>
        <div className={user_identity}>
          {loginUserdata.map(({ username, email }, index) => (
            <div key={index} style={{ color: "#fff" }}>
              <p>{username[0].toUpperCase() + username.slice(1)}</p>
              <br />
              <address>
                <abbr title={email}>My Email Address</abbr>
              </address>
            </div>
          ))}
        </div>
        <div className={dropDown}>
          <ul className={option_list}>
            {options.map((option, index) => (
              <Lists
                key={index}
                text={
                  <Links
                    url={"/dashboard"}
                    text={option}
                    textTransform={"capitalize"}
                    click={handleOptionClick}
                  />
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
