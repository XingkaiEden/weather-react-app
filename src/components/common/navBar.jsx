import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";


class NavBar extends Component {
    state = {}
    render() {
        return (

            <nav className="navbar navbar-expand-sm navbar-light">
                <Link className="navbar-brand" to="/">Eden's WeatherChecker</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/currentweather">CurrentWeather <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/forecast">5 Days Forecast</NavLink>
                        </li>

                    </ul>

                </div>
            </nav>
        );
    }
}

export default NavBar;
