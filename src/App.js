import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./Views.component/Registration.views.component/SignUp.registration";
import Login from "./Views.component/Registration.views.component/Login.registration";
import SignInReg from "./Views.component/Registration.views.component/Signin.reg";
import PageForLoggedUsers from "./AuthUserRoutes/View/Pages";
function App() {
  const Display = () => <h2>Sorry this page does not exist</h2>;
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignInReg} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <PageForLoggedUsers />
          <Route component={Display} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
