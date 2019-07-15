import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div id="div1">
            <div class="container">
            <div class="row">
                <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                    <img className="logo" src={require('../Image/logo1.png')} alt="no image"></img>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                    <button className="btn1">Signup</button>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                    <button className="btn2">Signin</button>
                </div>
            </div>
            <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                <label className="label1">Location</label>
                <input className="ip1" type="text" name="location"></input>
                <label className="label2">Search</label>
                <input className="ip2" type="text" name="search" placeholder="Search..."></input>
            </div>
            </div>
            <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
            <p className="p1">Online food ordering is the process of ordering food through the restaurant's own website or mobile app, or through a multi-restaurant's website or app. A customer can choose to have the food delivered or for pick-up. The process consists of a customer choosing the restaurant of their choice, scanning the menu items, choosing an item, and finally choosing for pick-up or delivery</p>
            </div>   
            </div>
            </div>
            </div>
        );
    }
}

export default Home;