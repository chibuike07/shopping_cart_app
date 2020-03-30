import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Views.component/Dashboard.views.component/Dashboard.dashboard";
function App() {
  const Display = () => <h2>welcome to my shopping cart</h2>;
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Display} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
