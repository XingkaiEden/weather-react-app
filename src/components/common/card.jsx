import React, { Component } from 'react';

class Card extends Component {
    state = {}
    render() {
        const { city, temp } = this.props;
        return (

            <div className="card">
                <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{city}</h5>
                    <p className="card-text">{temp}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default Card;