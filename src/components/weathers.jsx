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




    getWeatherData = async cities => {
        const id = cities[0].id;
        const { data } = await http.get(`${apiUrl}/data/2.5/weather?id=${id}&appid=${apiKey}`);
        const weathers = [...this.state.weathers, data];
        this.setState({ weathers });

    }


    handleSearchCity = ({ city: cityName, country: countryName }) => {


        const searchResults = cities
            .filter(c => c.name.toLowerCase() === cityName.toLowerCase())
            .filter(c => c.country.toLowerCase() === countryName.toLowerCase());
        if (searchResults.length === 0)
            toast.error("Invalid City");

        const targetCities = [...this.state.targetCities, ...searchResults];

        this.setState({ targetCities }, () => { this.getWeatherData(this.state.targetCities) });
        console.log(this.state.targetCities);






    }

    render() {
        // const { name: cityName, main: { temp } } = this.state.weather;
        return (
            <div>
                <CitySearcher
                    onSearch={this.handleSearchCity}
                />
                <Card

                />
            </div>
        );
    }
}

export default Weathers;