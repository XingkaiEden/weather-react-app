import React, { Component } from 'react';
import http from '../services/httpService';
import Card from './common/card';
import apiUrl from "../config.json";
import CitySearcher from './citySearcher';


class Weathers extends Component {
    state = {
        weather: {}
    }

    render() {
        // const { name: cityName, main: { temp } } = this.state.weather;
        return (
            <div>
                <CitySearcher />
                <Card

                />
            </div>
        );
    }
}

export default Weathers;