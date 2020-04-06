import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../../Views.component/Dashboard.views.component/Dashboard.dashboard";
import Header from "../../Components/Header/Header.components";
import ProductDisplay from "../../Views.component/Products.display.views.component/products.product.display";
const PageForLoggedUsers = ({ history }) => {
  const componentsArray = [
    {
      path: "/dashboard",
      component: Dashboard
    },
    {
      path: "/categories",
      component: ProductDisplay
    }
  ];
  return (
    <BrowserRouter>
      <Header />
      {sessionStorage.getItem("userObject") ? (
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/categories" component={ProductDisplay} />
        </Switch>
      ) : (
        history.push("/")
      )}
    </BrowserRouter>
  );
};
export default PageForLoggedUsers;
