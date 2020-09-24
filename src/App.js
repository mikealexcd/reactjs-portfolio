import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import logo from './logo-simple.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Photography from './Photography';
import WebDev from './Webdev';
import Ecommerce from './Ecommerce';


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/webdev">
          <WebDev />
        </Route>
        <Route path="/e-commerce">
          <Ecommerce />
        </Route>
        <Route path="/photography">
          <Photography />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


function Home() {
  return (
    <div className="full-container d-flex flex-row">
    <img src={logo} className="my-logo" alt="logo" />
    <div>
      <h1 className="top-title">MIGUEL CEJA</h1>
      <p className="description">WEB DEVELOPER</p>
      <p className="description">& E-COMMERCE SPECIALIST</p>
    </div>
  </div>
  );
}


