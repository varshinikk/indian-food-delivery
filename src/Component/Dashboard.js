import React, { Component } from 'react';
import './Dashboard.css'
import Navbar from './Navbar'

class Dashboard extends Component {
    render() {
        return (
            <div id="div4">
                {/* <div><Navbar/></div> */}
                <div class="container">
                <div class="row">
                <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12 nav">
                    <Navbar/>
                </div>
                </div>
                <div class="row">
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3 div5">
                    <div id="mySidenav" class="sidenav">
                        <a href="#" id="restaurants"> Popular Restaurants</a>
                        <a href="#" id="offer">Offers</a>
                        <a href="#" id="all">All Restaurants</a>
                    </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                    <div class="card" >
                    <div class="card-body">
                        <img className="hotel1" src={require('../Image/hotel1.jpeg')} alt="no image" /><br />
                        <h3>Infinit</h3>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                    <div class="card" >
                    <div class="card-body">
                        <img className="hotel1" src={require('../Image/hotel2.jpg')} alt="no image" /><br />
                        <h3>Sagar Ratna</h3>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                    <div class="card" >
                    <div class="card-body">
                        <img className="hotel1" src={require('../Image/hotel3.jpg')} alt="no image" /><br />
                        <h3>Tapri By The Corner</h3>
                    </div>   
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3 div6"></div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                <div class="card card1" >
                    <div class="card-body">
                        <img className="hotel4" src={require('../Image/hotel5.jpeg')} alt="no image" /><br />
                        <h3>Sandesh The Prince</h3>
                    </div>   
                    </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                <div class="card card1" >
                    <div class="card-body">
                        <img className="hotel4" src={require('../Image/hotel6.jpeg')} alt="no image" /><br />
                        <h3>Maharaja Family Restaurant</h3>
                    </div>   
                    </div>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                <div class="card card1" >
                    <div class="card-body">
                        <img className="hotel4" src={require('../Image/hotel4.jpg')} alt="no image" /><br />
                        <h3>La Brasserie Restaurant</h3>
                    </div>   
                    </div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Dashboard;



