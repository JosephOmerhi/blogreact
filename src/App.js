import React from "react";
import "./App.css";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Category from "./Pages/Category";
import Subscribe from "./Pages/Subscribe";
import Search from "./Pages/Search";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/subscribe">
          <Subscribe />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
