import React from 'react';
import NavBar from './components/common/navBar';
import { ToastContainer } from 'react-toastify';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/currentweather" component={Weather} />
        </Switch>

      </div>
    </div>
  );
}


export default App;

