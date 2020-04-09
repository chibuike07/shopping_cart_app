import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../../Views.component/Dashboard.views.component/Dashboard.dashboard";
import Header from "../../Components/Header/Header.components";
import ProductDisplay from "../../Views.component/Products.display.views.component/products.product.display";
import Profile from "../../Views.component/Profile.component/Profile";
const PageForLoggedUsers = () => {
  return (
    <BrowserRouter>
      {sessionStorage.getItem("userObject") ? (
        <div>
          <Header />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/categories" component={ProductDisplay} />
            <Route exact path="/dashboard/:profile" component={Profile} />
          </Switch>
        </div>
      ) : (
        window.location.replace("/")
      )}
    </BrowserRouter>
  );
};
export default PageForLoggedUsers;
