import React from 'react';
import NavBar from './components/common/navBar';
import Weather from './components/weathers';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <div className="container-fluid">
        <Weather />
      </div>
    </div>
  );
}

export default App;
