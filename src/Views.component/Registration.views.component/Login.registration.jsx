import React from "react";
import Inputs from "../../Components/Inputs/Input.component";
import Image from "../../Components/Image/Image.component";
import bags from "../../Asset.component/bags.jpeg";
import Button from "../../Components/Button/Button.component";
import LoginStyles from "./Login.module.css";
const Login = () => {
  const {
    login_container,
    wrapper,
    text,
    login_inputs,
    input_wrapper,
    email_input,
    password_input
  } = LoginStyles;
  return (
    <div className={login_container}>
      <div className={wrapper}>
        <div className={text}>
          <h3>SHOEBLOG</h3>
        </div>
        <div className={login_inputs}>
          <form className={input_wrapper}>
            <div className={email_input}>
              <Image src={bags} width={"20px"} height={"20px"} />
              <Inputs
                name={"email"}
                type={"email"}
                placeholder={"Email"}
                width={"250px"}
                paddingLeft={"15px"}
                borderRadius={"20px"}
                height={"30px"}
                isRequired={true}
              />
            </div>
            <div className={password_input}>
              <Image src={bags} width={"20px"} height={"20px"} />
              <Inputs
                name={"email"}
                type={"password"}
                placeholder={"password"}
                width={"250px"}
                paddingLeft={"15px"}
                borderRadius={"20px"}
                height={"30px"}
                isRequired={true}
              />
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
