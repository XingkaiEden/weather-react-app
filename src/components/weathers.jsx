import React, { Component } from 'react';
import http from '../services/httpService';
import Card from './common/card';
import apiUrl from "../config.json";
import CitySearcher from './citySearcher';
import cities from '../city.list.json';
import { toast } from 'react-toastify';


class Weathers extends Component {
    state = {
        weather: {}
    }


    handleSearchCity = ({ city: cityName, country: countryName }) => {


        const searchResults = cities
            .filter(c => c.name.toLowerCase() === cityName.toLowerCase())
            .filter(c => c.country.toLowerCase() === countryName.toLowerCase());
        if (searchResults.length === 0)
            toast.error("Invalid City");
        console.log(searchResults);



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