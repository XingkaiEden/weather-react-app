import React from 'react';
import NavBar from './components/common/navBar';
import './App.css';
import Weather from './components/weathers';


function App() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <Weather />
      </div>
    </div>
  );
}

export default App;
