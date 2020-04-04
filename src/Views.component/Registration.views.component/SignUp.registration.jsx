import React, { useState } from "react";
import Input from "../../Components/Inputs/Input.component";
import Button from "../../Components/Button/Button.component";
import Label from "../../Components/Label/Label.component";
import SignUpStyles from "./SignUp.module.css";
const SignUp = ({ history }) => {
  //destructuring styles properties
  const {
    signUp_wrapper,
    text,
    welcome_text,
    form_wrapper,
    container,
    signup_label,
    text_view,
    appraisal
  } = SignUpStyles;

  const [auth, setAuth] = useState([]); //destructuring state and set state from useState for user auth
  const [userAuths, setUserAuth] = useState([]);

  ////function to get the user input value onchange
  const handleChange = ({ target }) => {
    setAuth(prev => ({
      ...prev,
      [target.name]: target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault(); //prevent the form default form submittion
    setUserAuth(prev => [...prev, auth]);
    history.push("/login");
  };

  return (
    <div className={signUp_wrapper}>
      <div className={container}>
        <div className={text_view}>
          <div className={text}>
            <h2 className={welcome_text}>
              welcome to the amible and <br /> quality body wears
            </h2>
          </div>
          <div className={appraisal}>
            <p>think quality!</p>
            <p>think best services!</p>
            <p>think greatness!</p>
          </div>
        </div>
        <div className={form_wrapper}>
          <form onSubmit={handleSubmit}>
            <Label
              labelFor={"firstname"}
              text={"first name"}
              padding={"40px 0px 0px 0px"}
              className={signup_label}
              // color={"#fff"}
            />
            <Input
              name={"firstname"}
              type={"text"}
              placeholder={"eg williams"}
              onChange={handleChange}
              isRequired={true}
              id={"firstname"}
              // value={auth.firstname}
              width={"40vw"}
              height={"40px"}
              border={"none"}
              borderRadius={"20px"}
              paddingLeft={"15px"}
              backgroundColor={"transparent"}
              borderBottom={"5px solid #ef942d"}
            />
            <Label labelFor={"last name"} text={"last name"} />
            <Input
              name={"lastname"}
              type={"text"}
              placeholder={"eg williams"}
              onChange={handleChange}
              isRequired={true}
              id={"lastname"}
              // value={auth.lastname}
              width={"40vw"}
              height={"40px"}
              border={"none"}
              borderRadius={"20px"}
              paddingLeft={"15px"}
              backgroundColor={"transparent"}
              borderBottom={"5px solid #ef942d"}
            />
            <Label
              labelFor={"username"}
              text={"username"}
              className={signup_label}
            />
            <Input
              name={"username"}
              type={"text"}
              placeholder={"eg a nick name"}
              onChange={handleChange}
              isRequired={true}
              id={"username"}
              // value={auth.username}
              width={"40vw"}
              height={"40px"}
              border={"none"}
              borderRadius={"20px"}
              paddingLeft={"15px"}
              backgroundColor={"transparent"}
              borderBottom={"5px solid #ef942d"}
            />
            <Label labelFor={"email"} text={"email"} />
            <Input
              name={"email"}
              type={"email"}
              placeholder={"eg williams@gmail.com"}
              onChange={handleChange}
              isRequired={true}
              id={"email"}
              // value={auth.email}
              width={"40vw"}
              height={"40px"}
              border={"none"}
              borderRadius={"20px"}
              paddingLeft={"15px"}
              backgroundColor={"transparent"}
              borderBottom={"5px solid #ef942d"}
            />
            <Label labelFor={"password"} text={"password"} />
            <Input
              name={"password"}
              type={"password"}
              placeholder={"eg alphanumericals a123b"}
              onChange={handleChange}
              isRequired={true}
              id={"password"}
              // value={auth.password}
              width={"40vw"}
              height={"40px"}
              border={"none"}
              borderRadius={"20px"}
              paddingLeft={"15px"}
              backgroundColor={"transparent"}
              borderBottom={"5px solid #ef942d"}
            />
            <Label labelFor={"repeat_password"} text={"repeat password"} />
            <Input
              name={"repeat_password"}
              type={"password"}
              placeholder={"eg a123b"}
              onChange={handleChange}
              isRequired={true}
              id={"repeat_password"}
              // value={auth.repeat_password}
              width={"40vw"}
              height={"40px"}
              border={"none"}
              borderRadius={"20px"}
              paddingLeft={"15px"}
              backgroundColor={"transparent"}
              borderBottom={"5px solid #ef942d"}
            />
            <Button
              text={"submit"}
              width={"15vw"}
              margin={"15px 23vw 0px 0px"}
              backgroundColor={"#ef942d"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
