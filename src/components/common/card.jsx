import React, { Component } from 'react';
import test from '../../imgs/test.jpg';

class Card extends Component {
    state = {}
    render() {
        const { cityName, temp } = this.props;
        return (

            <div className="card">
                <img className="card-img-top" src={test} />
                <div className="card-body">
                    <h5 className="card-title">{cityName}</h5>
                    <p className="card-text">{temp}</p>
                    <p className="card-text">{temp}</p>
                    <p className="card-text">{temp}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default Card;