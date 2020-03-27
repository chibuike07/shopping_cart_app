import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Button from "./Components/Button/Button.component";
import Input from "./Components/Inputs/Input.component";
import Links from "./Components/Links/Link.component";
function App() {
  const Display = () => <h2>welcome to my shopping cart</h2>;
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route to="/" component={Display} />
        </Switch>
        <Input />
        <Links />
        <Button />
      </BrowserRouter>
    </div>
  );
}

export default App;
