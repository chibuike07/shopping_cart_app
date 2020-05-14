import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../Views.component/Dashboard.views.component/Dashboard.dashboard";
import Header from "../Components/Header/Header.components";
import ProductDisplay from "../Views.component/Products.display.views.component/products.product.display";
import Profile from "../Views.component/Profile.component/Profile";
import AboutUs from "../Views.component/About.component/About.view";
import ContactUs from "../Views.component/Contact_us.view.component/Contact_us";
import SidebarParams from "../Views.component/Sidebarparams.view.component/Sidebarparams";
import SideBar from "../Views.component/Sidebar.dashboard.component/Sidebar.dashboard.component";
import FoundProducts from "../Views.component/SearchProductParams/Found_products";
import SpecifiedItem from "../Views.component/Specified-product.views.component/display_specified";
const Display = () => <p>this page does not exist</p>;
const PageForLoggedUsers = () => {
  return (
    <BrowserRouter>
      <Header />
      {sessionStorage.getItem("userObject") ? (
        <div
          style={{
            display: "flex",
            backgroundColor: "#faf4f4",
            heigth: "100vh",
            justifyContent: "space-between"
          }}
        >
          <div>
            <SideBar />
          </div>
          <div style={{ height: "86.5vh", overflowY: "scroll", width: "100%" }}>
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/categories" component={ProductDisplay} />
              <Route path="/categories/:product" component={SpecifiedItem} />
              <Route exact path="/dashboard/:profile" component={Profile} />
              <Route
                exact
                path="/dashboard/sidebars/:sidebars"
                component={SidebarParams}
              />
              <Route path="/about" component={AboutUs} />
              <Route path="/contact" component={ContactUs} />
              <Route path="/products/:items" component={FoundProducts} />
              <Route component={Display} />
            </Switch>
          </div>
        </div>
      ) : (
        window.location.replace("/")
      )}
    </BrowserRouter>
  );
};
export default PageForLoggedUsers;
