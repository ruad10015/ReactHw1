import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Sidebar from './Sidebar'; 

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <div className="top-nav">
          <p>Page 1</p>
          <p>Page 2</p>
          <p>Page 3</p>
          <p>Page 4</p>
        </div>
        <div className="main-content">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Responsive Sidebar Template</h2>
        </div>
      </div>
    </div>
  );
};

export default App;
