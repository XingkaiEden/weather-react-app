import React, { Component } from 'react';
import test from '../../imgs/test.jpg';

class Card extends Component {
    state = {}
    render() {
        // const { city, temp } = this.props;
        return (

            <div className="card">
                <img className="card-img-top" src={test} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">CityName</h5>
                    <p className="card-text">Temp</p>
                    <p className="card-text">Temp</p>
                    <p className="card-text">Temp</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default Card;