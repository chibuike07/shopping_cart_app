import React, { useState } from "react";
import Input from "../../Components/Inputs/Input.component";
import Button from "../../Components/Button/Button.component";
import Label from "../../Components/Label/Label.component";
const SignUp = ({ history }) => {
  const [auth, setAuth] = useState([]);
  const [userAuths, setUserAuth] = useState([]);
  console.log(history);
  const handleChange = ({ target }) => {
    setAuth(prev => ({ ...prev, [target.name]: target.value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setUserAuth(prev => [...prev, auth]);
    history.push("/login");
  };

  // console.log(userAuths);
  return (
    <div className="signUp_wrapper">
      <div className="text">
        <h2 className="welcome_text">
          welcome to the amible and quality body wears
        </h2>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <Label labelFor={"firstname"} text={"first name"} />
          <Input
            name={"firstname"}
            type={"text"}
            placeholder={"eg williams"}
            onChange={handleChange}
            isRequired={true}
            id={"firstname"}
            // value={auth.firstname}
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
          />
          <Label labelFor={"username"} text={"username"} />
          <Input
            name={"username"}
            type={"text"}
            placeholder={"eg a nick name"}
            onChange={handleChange}
            isRequired={true}
            id={"username"}
            // value={auth.username}
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
          />
          <Label labelFor={"password"} text={"password"} />
          <Input
            name={"password"}
            type={"password"}
            placeholder={"eg alphanumericals"}
            onChange={handleChange}
            isRequired={true}
            id={"password"}
            // value={auth.password}
          />
          <Label labelFor={"repeat_password"} text={"repeat password"} />
          <Input
            name={"repeat_password"}
            type={"password"}
            placeholder={"eg repeat password"}
            onChange={handleChange}
            isRequired={true}
            id={"repeat_password"}
            // value={auth.repeat_password}
          />
          <Button text={"submit"} width={"100px"} />
        </form>
      </div>
    </div>
  );
};
export default SignUp;
