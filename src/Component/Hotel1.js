import React, { Component } from 'react';

class Hotel1 extends Component {
    render() {
        return (
            <div>
                <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                        <h2>Infinit</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                       <button>4.1</button>
                       <p>No.29, 6th Main Road, Vv Mohalla, Mysore - 570002, Near Post Office</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
                    <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                        <img className="hotel1" src={require('../Image/hotel1.jpeg')} alt="no image" />
                    </div>
                    <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
                </div>
                <div class="row">
                    <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                        <div class="card" >
                        <div class="card-body">
                            <p>Ratings</p>
                            <p>4.1 144 Reviews</p>
                            <hr></hr>
                            <h>Food</h>
                            <h>4.0</h>
                            <h>Service</h>
                            <h>4.2</h>
                            <h>Value</h>
                            <h>3.9</h>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                        <div class="card" >
                        <div class="card-body">
                            <p>Details</p>
                            <p>PRICE RANGE</p>
                            <p>Rs.206 - Rs.1,032</p>
                            <p>CUISINES</p>
                            <p>Indian, Pizza, Thai, Italian, Chinese</p>
                            <p>MEALS</p>
                            <p>Lunch, Dinner, Brunch, After-hours, Drinks, Breakfast</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                        <div class="card" >
                        <div class="card-body">
                            <p>Book the food</p>
                            <button type="submit">+</button>
                            <button type="submit">-</button>
                            <hr></hr>
                            <p>Delivery Timings</p>
                            <h>30 Minutes</h>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Hotel1;