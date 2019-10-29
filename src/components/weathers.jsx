import React, { Component } from 'react';
import http from '../services/httpService';
import Card from './common/card';
import { apiUrl, apiKey } from "../config.json";
import CitySearcher from './citySearcher';
import cities from '../city.list.json';
import { toast } from 'react-toastify';


class Weathers extends Component {
    state = {
        weathers: [],
        targetCities: []
    }



    componentDidUpdate(prevProps, prevState) {

    }
    getWeatherData = async cities => {
        const id = cities[cities.length - 1].id;
        const { data } = await http.get(`${apiUrl}/data/2.5/weather?id=${id}&appid=${apiKey}`);
        const weathers = [...this.state.weathers, data];
        this.setState({ weathers });

    }

    testDuplicateCity = searchResults => {

        if (this.state.targetCities.length !== 0) {
            if (this.state.targetCities.find(city => city.id === searchResults[0].id)) {
                toast.error("City has been addeds");
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

    render() {

        return (
            <div>
                <CitySearcher
                    onSearch={this.handleSearchCity}
                />
                {this.state.weathers.map(weather =>
                    <Card
                        key={weather.id}
                        cityName={weather.name}
                        temp={weather.main.temp}
                    />
                )}
            </div>
        );
    }
}

export default Weathers;