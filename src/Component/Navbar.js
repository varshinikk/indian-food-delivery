import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
                <div className="div3">
                <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-info">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                        <img className="logo1" src={require('../Image/logo1.png')} alt="no image"></img>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./">Home</a>
                    </li>
                    <form class="form-inline my-2 my-lg-0">
                    <div class="form-group">
                        <input type="text" className="ip9" placeholder="Search" name="search"></input>
                    </div>
                        <button className="btn6" type="submit">Submit</button>
                    </form>
                    <li class="nav-item">
                        <a class="nav-link" href="./Offer">Offers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./Help">Help</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./Signin">Signin</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./Cart">Cart</a>
                    </li>
                    <li class="nav-item">
                        <a id="logout" class="nav-link" href="./">Logout</a>
                    </li>
                </ul>
            </div>
            </nav>
            </div>
        );
    }
}

export default Navbar;

