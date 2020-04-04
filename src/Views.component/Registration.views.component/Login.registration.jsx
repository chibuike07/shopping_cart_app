import React, { useState } from "react";
import Inputs from "../../Components/Inputs/Input.component";
import Image from "../../Components/Image/Image.component";
import passKey from "../../Asset.component/passkey.png";
import showPass from "../../Asset.component/visibility.png";
import hidePass from "../../Asset.component/hide.png";
import userImg from "../../Asset.component/user.png";
import Button from "../../Components/Button/Button.component";
import LoginStyles from "./Login.module.css";
import { members } from "../Members.view.component/Members.members";
import Links from "../../Components/Links/Link.component";

//function for login username auth
const Login = ({ history }) => {
  // setting an array in the state for user inputs values
  const [userLogin, setUserLogin] = useState([]);
  // setting a state to hold the hide and seek images for user password
  const [showHidePass, setShowHide] = useState(hidePass);
  //destructuring the style properties
  const {
    login_container,
    wrapper,
    text,
    login_inputs,
    input_wrapper,
    email_input,
    password_input
  } = LoginStyles;

  //function to get the user input value onchange
  const handleChange = ({ target }) => {
    //destructured target from the event
    //spreading the state to concat the user input datas
    setUserLogin(prev => ({
      ...prev,
      [target.name]: target.value
    }));
  };

  //function to verify user before heading to the dashboard
  const handlesubmit = e => {
    //prevent the form default form submittion
    e.preventDefault();
    let userData = {}; // object to hold the user object
    // getting the values of the key in members object that matches the user username value
    let username = Object.values(members[userLogin.username].username).join("");
    let uniquepass = Object.values(members[userLogin.username].uniquepass).join(
      ""
    );
    let userObject = Object.values(members[userLogin.username]); //getting the object of the member that want to login
    if (userLogin.username === username && userLogin.password === uniquepass) {
      //comparing to check if username inputvalue and password inputvalue matches the userObject username and password
      alert("login successfull"); //alert if user have already registered
      Object.assign(userData, {
        id: userObject[0],
        username: userObject[1],
        otherNames: userObject[2],
        email: userObject[3],
        uniquepass: userObject[4],
        img: userObject[5],
        phone: userObject[6]
      });
      // setting the successfull user object to the session storage
      sessionStorage.setItem("userObject", JSON.stringify(userData));
      history.replace("/dashboard"); //routing the dashboard if successfull
    } else {
      //alert if username or password does not match
      alert("username or password is incorrect");
    }
  };
  //fuction for the hide and seek images
  const handleHideAndSeek = () => {
    let passwordInput = document.getElementById("password");
    if (passwordInput.value !== "") {
      //conditions if passwordInput value is empty
      if (passwordInput.type === "password" && showHidePass === hidePass) {
        //conditions to toggle the show and hide password
        passwordInput.type = "text";
        setShowHide(showPass);
      } else {
        passwordInput.type = "password";
        setShowHide(hidePass);
      }
    }
  };
  return (
    <div className={login_container}>
      <div className={wrapper}>
        <div className={text}>
          <h3>SHOEBLOG</h3>
        </div>
        <div className={login_inputs}>
          <form className={input_wrapper} onSubmit={handlesubmit}>
            <div className={email_input}>
              <Image src={userImg} width={"20px"} height={"20px"} />
              <Inputs
                name={"username"}
                type={"text"}
                placeholder={"username"}
                width={"250px"}
                paddingLeft={"15px"}
                borderRadius={"20px"}
                height={"30px"}
                isRequired={true}
                onChange={handleChange}
                value={userLogin.username}
                id={"username"}
              />
            </div>
            <div className={password_input}>
              <Image src={passKey} width={"20px"} height={"20px"} />
              <Inputs
                name={"password"}
                type={"password"}
                placeholder={"password"}
                width={"250px"}
                paddingLeft={"15px"}
                borderRadius={"20px"}
                height={"30px"}
                isRequired={true}
                onChange={handleChange}
                value={userLogin.password}
                id={"password"}
              />
              <Image
                src={showHidePass}
                width={"20px"}
                height={"20px"}
                position={"absolute"}
                top={"5px"}
                left={"58%"}
                onclick={handleHideAndSeek}
              />
            </div>
            <div className="forgotPass">
              <p>
                <Links
                  text={"have forgotten my password"}
                  color={"blue"}
                  url={"/"}
                />
              </p>
            </div>
            <Button
              text={"LOGIN"}
              backgroundColor={"#ef942d"}
              outline={"none"}
              margin={"10px 0px 0px 25px"}
              width={"240px"}
              borderRadius={"20px"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
