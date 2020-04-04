import React from "react";
import SignInStyles from "./SignIn.module.css";
import Links from "../../Components/Links/Link.component";
const SignInReg = () => {
  const {
    signInWrapper,
    background_container,
    heading,
    hint,
    register,
    registerWrapper
  } = SignInStyles;
  return (
    <div className={signInWrapper}>
      <div className={background_container}>
        <div className="bodyWraper">
          <div className={heading}>
            <h2>shoeblog</h2>
          </div>
          <div className={hint}>
            <h3>welcome to shoeblog</h3>
          </div>
          <div className={register}>
            <div className={registerWrapper}>
              <Links
                url={"/login"}
                text={"LOGIN"}
                border={"2px solid #ef942d"}
                padding={"7px"}
                width={"30vw"}
                margin={"auto"}
                borderRadius={"20px"}
                color={"#fff"}
              />
              <Links
                url={"/signup"}
                text={"SIGNUP"}
                border={"2px solid #ef942d"}
                padding={"7px"}
                width={"30vw"}
                margin={"auto"}
                borderRadius={"20px"}
                backgroundColor={"#ef942d"}
                color={"#fff"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignInReg;
