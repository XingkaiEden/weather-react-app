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
        const { title } = this.props;
        return (
            <div>
                <h1 className="center">{title}</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("city", "City", "Please Enter City's name")}
                    {this.renderInput("country", "Country Code", "Please Enter Country's Code")}
                    {this.renderButton("Search")}
                </form>
            </div>
        );
    }
}

export default CitySearcher;