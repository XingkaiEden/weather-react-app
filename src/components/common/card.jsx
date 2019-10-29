import React, { Component } from 'react';
import test from '../../imgs/test.jpg';
import http from '../../services/httpService';


const celsius = <span>&#8451;</span>;
const fahrenheit = <span>&#8457;</span>;

class Card extends Component {
    state = {}
    render() {
        const { onDelete } = this.props;
        const { name: cityName, weather } = this.props.weather;
        const { temp, temp_min: mintemp, temp_max: maxtemp, } = this.props.weather.main;
        //@weatherIcons is []

        return (
            <div className="col-xl-3 col-lg-4 col-md-12 col-sm-2 col-xs-12">


                <div className="card text-center">
                    {weather.map(weatherIcon =>
                        <img
                            className="card-img-top"
                            src={`http://openweathermap.org/img/wn/${weatherIcon.icon}@2x.png`}
                            key={weatherIcon.icon}
                        />
                    )}
                    <div className="card-body">
                        <h5 className="card-title">{cityName}</h5>
                        <p className="card-text">avg Temp: {temp}{celsius}</p>
                        <p className="card-text">mintemp: {mintemp}{celsius}</p>
                        <p className="card-text">maxtemp: {maxtemp}{celsius}</p>
                        <button onClick={() => onDelete(this.props.weather)} className="btn btn-primary">Delete</button>
                    </div>
                </div>


            </div>
        );
    }
}

export default Card;