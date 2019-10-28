import React from 'react';
import Form from './common/form';
import joi from 'joi-browser';


class CitySearcher extends Form {
    state = {
        data: { city: "", country: "" },
        error: {}
    }
    schema = {
        city: joi.string().required().label("City"),
        country: joi.string().required().length(2).label("Country")
    }

    doSubmit = () => {
        this.props.onSearch(this.state.data);

    }

    render() {
        return (
            <div>
                <h1>Please Enter the City's Name and Country's Code</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("city", "City")}
                    {this.renderInput("country", "Country")}
                    {this.renderButton("Search")}
                </form>
            </div>
        );
    }
}

export default CitySearcher;