import React, {useState} from 'react';
import logo from './logo-simple.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Tabs, Tab} from 'react-bootstrap'

function App() {
  return (
    <div className="main">
      <ControlledTabs />
    </div>
  );
}

export default App;

function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Home">
        <Home />
      </Tab>
      <Tab eventKey="webdev" title="WebDev">
      <WebDev />
      </Tab>
      <Tab eventKey="e-commerce" title="E-commerce">
      <Ecommerce />
      </Tab>
      <Tab eventKey="photography" title="Photography">
      <Photography />
      </Tab>
    </Tabs>
  );
}


function Home() {
  return (
    <div className="main-content d-flex flex-row">
    <img src={logo} className="my-logo" alt="logo" />
    <div>
      <h1 className="my-name">MIGUEL CEJA</h1>
      <p className="my-title">Web Developer and <br />E-commerce Specialist</p>
    </div>
  </div>
  )
}

function WebDev() {
  return (
    <div className="main-content d-flex flex-row">
    <div>
      <h1 className="my-name">Web Development</h1>
    </div>
  </div>
  )
}

function Ecommerce() {
  return (
    <div className="main-content d-flex flex-row">
    <div>
      <h1 className="my-name">E-Commerce</h1>
    </div>
  </div>
  )
}

function Photography() {
  return (
    <div className="main-content d-flex flex-row">
    <div>
      <h1 className="my-name">Photography</h1>
    </div>
  </div>
  )
}
