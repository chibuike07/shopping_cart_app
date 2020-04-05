import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../../Views.component/Dashboard.views.component/Dashboard.dashboard";
import Header from "../../Components/Header/Header.components";
const PageForLoggedUsers = ({ history }) => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {sessionStorage.getItem("userObject") ? (
          <Route exact path="/dashboard" component={Dashboard} />
        ) : (
          history.push("/")
        )}
      </Switch>
    </BrowserRouter>
  );
};
export default PageForLoggedUsers;
