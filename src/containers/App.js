import React, { Component } from "react";
import Properties from "../components/Properties/properties";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "../components/Home/home";
import Favourites from "../components/favourites/favourites";
import FullProperty from "../components/FullProperty/FullProperty";
import Contact from "../components/Contact/contact";
class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/properties">Properties</NavLink>
            </li>
            <li>
              <NavLink to="/fav">Favourites</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/properties/:id" component={FullProperty} />
          <Route path="/properties" component={Properties} />
          <Route path="/fav" component={Favourites} />
          <Route path="/contact" component={Contact} />
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
