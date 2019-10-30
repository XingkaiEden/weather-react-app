import React, { Component } from 'react';
import NavBar from './components/common/navBar';
import CurrentWeather from './components/currentWeathers';
import Helmet from 'react-helmet';
import bg from './imgs/bg.jpeg';
import http from './services/httpService';
import cities from './city.list.json';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { Route, Switch, Redirect } from "react-router-dom";
import { apiUrl, apiKey } from "./config.json";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Forecast from './components/forecast';


class App extends Component {
  state = {
    weathers: [],
    targetCities: []
  }




  getWeatherData = async cities => {
    const id = cities[cities.length - 1].id;
    const { data } = await http.get(`${apiUrl}/data/2.5/weather?id=${id}&units=metric&appid=${apiKey}`);
    const weathers = [...this.state.weathers, data];
    this.setState({ weathers });

  }

  testDuplicateCity = searchResults => {

    if (this.state.targetCities.length !== 0) {
      if (this.state.targetCities.find(city => city.id === searchResults[0].id)) {
        toast.error("City has been added");
        return false;
      }
    }

    return true;

  }


  handleSearchCity = ({ city: cityName, country: countryName }) => {

    const searchResults = cities
      .filter(c => c.name.toLowerCase() === cityName.toLowerCase())
      .filter(c => c.country.toLowerCase() === countryName.toLowerCase());

    if (searchResults.length === 0) {//did not find the city in the list
      toast.error("Invalid City");
      return;
    }

    if (!this.testDuplicateCity(searchResults)) return;

    console.log(this.state.targetCities);
    const targetCities = [...this.state.targetCities, ...searchResults];
    this.setState({ targetCities }, () => {
      this.getWeatherData(this.state.targetCities)
    });
  }


  handleDelete = obj => {
    const weathers = this.state.weathers.filter(w => w.id !== obj.id);
    const targetCities = this.state.targetCities.filter(c => c.id !== obj.id);
    this.setState({ weathers, targetCities });

  }
  render() {
    return (
      <div >
        <Helmet bodyAttributes={{ backgroundImage: `url(${bg})` }}>
          <meta charSet="utf-8" />
          <title>Eden's Weather APP</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <ToastContainer />
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/currentWeather"
              render={props => <CurrentWeather {...props}
                onDelete={this.handleDelete}
                onSearch={this.handleSearchCity}
                weathers={this.state.weathers}
              />}
            />
            <Route path="/forecast"
              render={props => <Forecast {...props}
                onDelete={this.handleDelete}
                onSearch={this.handleSearchCity}
                weathers={this.state.weathers}
              />}
            />

          </Switch>
        </div>

      </div>
    );
  }
}

export default App;

