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
import firebase from 'firebase/app'

firebase.initializeApp({
  apiKey: "AIzaSyAaP3yJEL1Vj2aE560sxo2eSavtWpuhoyw",
  authDomain: "first-project-209902.firebaseapp.com",
  databaseURL: "https://first-project-209902.firebaseio.com",
  projectId: "first-project-209902",
  storageBucket: "first-project-209902.appspot.com",
  messagingSenderId: "33356502713",
  appId: "1:33356502713:web:50d0637b434da560a9ad68",
  measurementId: "G-MEQ9C1FC7X"
})


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


