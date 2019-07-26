import React, { Component } from 'react';
import './Restaurant.css'
import Navbar from './Navbar'

class Restaurant extends Component {
    render() {
        return (
            <div id="restaurant">
                <div class="container">
                <div class="row">
                <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12 nav">
                    <Navbar/>
                </div>
                </div>
                <div class="row">
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                <div class="card" >
                    <div class="card-body">
                        <img className="hotel1" src={require('../Image/hotel1.jpeg')} alt="no image" /><br />
                        <center><h3>Infinit</h3></center>
                        <center><h3 className="loc">Mysore</h3></center>
                    </div>
                </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                <div class="card" >
                    <div class="card-body">
                        <img className="hotel1" src={require('../Image/hotel1.jpeg')} alt="no image" /><br />
                        <center><h3>Infinit</h3></center>
                        <center><h3 className="loc">Mysore</h3></center>
                    </div>
                </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                <div class="card" >
                    <div class="card-body">
                        <img className="hotel1" src={require('../Image/hotel1.jpeg')} alt="no image" /><br />
                        <center><h3>Infinit</h3></center>
                        <center><h3 className="loc">Mysore</h3></center>
                    </div>
                </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                <div class="card" >
                    <div class="card-body">
                        <img className="hotel1" src={require('../Image/hotel1.jpeg')} alt="no image" /><br />
                        <center><h3>Infinit</h3></center>
                        <center><h3 className="loc">Mysore</h3></center>
                    </div>
                </div>
                </div>
                </div>

                <div class="row">
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                <div class="card card1">
                    <div class="card-body">
                        <img className="hotel4" src={require('../Image/hotel5.jpeg')} alt="no image" /><br />
                        <center><h3>Frosting</h3></center>
                        <center><h3 className="loc">Mysore</h3></center>
                    </div>   
                </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
                </div>

                <div class="row">
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
                </div>

                <div class="row">
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
                </div>

                </div>
            </div>
        );
    }
}

export default Restaurant;