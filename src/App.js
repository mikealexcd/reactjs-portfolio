import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import logo from './logo-simple.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation.js';

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
    <div className="main-content d-flex flex-row">
    <img src={logo} className="my-logo" alt="logo" />
    <div>
      <h1 className="top-title">MIGUEL CEJA</h1>
      <p className="description">WEB DEVELOPER</p>
      <p className="description">& E-COMMERCE SPECIALIST</p>
    </div>
  </div>
  );
}

function WebDev() {
  return (
    <div className="main-content">
      <div>
        <h1 className="top-title">Web Development</h1>
      </div>
    </div> 
  );
}

function Ecommerce() {
  return (
    <div className="main-content">
      <div>
        <h1 className="top-title">E-Commerce</h1>
      </div>
  </div>
  );
}

function Photography() {
  return (
    <div className="main-content">
      <div>
        <h1 className="top-title">Photography</h1>
      </div>
  </div>
  );
}
