import React, { Component } from 'react';
import { Link } from "react-router-dom";


class NavBar extends Component {
    state = {}
    render() {
        return (
<<<<<<< HEAD
            <nav className="navbar navbar-expand-sm navbar-light">
                <Link className="navbar-brand" to="/">Eden's WeatherChecker</Link>
=======
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">Navbar</Link>
>>>>>>> parent of ebc8d38... fix layout
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/currentWeather">Current Weather <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/forecast">5 Days Forecast</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }
}

export default NavBar;
