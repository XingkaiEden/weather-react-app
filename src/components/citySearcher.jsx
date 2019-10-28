import React from 'react';
import Form from './common/form';
import joi from 'joi-browser';


class CitySearcher extends Form {
    state = {
        data: { city: "" },
        error: {}
    }
    schema = {
        city: joi.string().required().label("City")
    }

    doSumbit = () => { }

    render() {
        return (
            <div>
                <h1>Please Enter the city</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("city", "City")}
                    {this.renderButton("Search")}
                </form>
            </div>
        );
    }
}

export default CitySearcher;