import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isused: "nav-link active"
    }
  }
  render() {
    return (
      <nav>
      <ul className="nav nav-tabs" id="navId">
        <li className="nav-item">
          <a href="#tab1Id" className={this.state.isused}>Home</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="web-development.html">Web Development</a></li>
        <li className="nav-item"><a className="nav-link" href="e-commerce.html">E-Commerce</a></li>
        <li className="nav-item"><a className="nav-link" href="photography.html">Photography</a></li>
      </ul>
      </nav>
    );
  }
}