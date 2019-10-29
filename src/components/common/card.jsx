import React, { Component } from 'react';
import test from '../../imgs/test.jpg';
import http from '../../services/httpService';

class Card extends Component {
    state = {}
    render() {
        const { onDelete } = this.props;
        const { city: cityName, weather } = this.props.weather;
        const { temp, temp_min: mintemp, temp_max: maxtemp, } = this.props.weather.main;
        //@weatherIcons is []
        return (

            <div className="card">
                {weather.map(weatherIcon =>
                    <img
                        className="card-img-top"
                        src={`http://openweathermap.org/img/wn/${weatherIcon.icon}@2x.png`}
                        key={weatherIcon.icon}
                    />
                )}
                <div className="card-body">
                    <h5 className="card-title">{cityName}</h5>
                    <p className="card-text">avg Temp: {temp}</p>
                    <p className="card-text">mintemp: {mintemp}</p>
                    <p className="card-text">maxtemp: {maxtemp}</p>
                    <button onClick={() => onDelete(this.props.weather)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        );
    }
}

export default Card;