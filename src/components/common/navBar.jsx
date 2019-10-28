import React, { Component } from 'react';
import { Link } from "react-router-dom";


class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <Link className="dropdown-item" to="">Action 1</Link>
                                <Link className="dropdown-item" to="">Action 2</Link>
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }
}

export default NavBar;
