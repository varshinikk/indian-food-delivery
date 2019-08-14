import React, { Component } from 'react';
import './Offer.css'
import Footer from './Footer';
import Navbar from './Navbar';

class Offer extends Component {
  render() {
    return (
      <div id="div6">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12 nav">
              <Navbar />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
              <h2 className="head6">Indian Food Offers for you...!!!</h2>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
          </div>
          <div class="row row1">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <div class="card" >
                <div class="card-body">
                  <img className="food1" src={require('../Image/food1.jpeg')} alt="no image" /><br />
                  <center><h3 className="head7">Fish Fry</h3></center>
                  <h3 className="head8">Cost = Rs.260</h3>
                  <h3 className="head8">Offer = 30%</h3>
                  <h3 className="head8">Delivery Charges = Rs.32</h3>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <div class="card" >
                <div class="card-body">
                  <img className="food2" src={require('../Image/food2.jpg')} alt="no image" /><br />
                  <center><h3 className="head7">Chicken Soup</h3></center>
                  <h3 className="head8">Cost = Rs.160</h3>
                  <h3 className="head8">Offer = 17%</h3>
                  <h3 className="head8">Delivery Charges = Rs.28</h3>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <div class="card" >
                <div class="card-body">
                  <img className="food2" src={require('../Image/food3.jpeg')} alt="no image" /><br />
                  <center><h3 className="head7">Chicken Biryani</h3></center>
                  <h3 className="head8">Cost = Rs.200</h3>
                  <h3 className="head8">Offer = 22%</h3>
                  <h3 className="head8">Delivery Charges = Rs.20</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row row2">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <div class="card" >
                <div class="card-body">
                  <img className="food2" src={require('../Image/food4.jpeg')} alt="no image" /><br />
                  <center><h3 className="head7">Mutton Fry</h3></center>
                  <h3 className="head8">Cost = Rs.280</h3>
                  <h3 className="head8">Offer = 18%</h3>
                  <h3 className="head8">Delivery Charges = Free Delivery</h3>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <div class="card" >
                <div class="card-body">
                  <img className="food2" src={require('../Image/food5.jpeg')} alt="no image" /><br />
                  <center><h3 className="head7">Chilly Chicken</h3></center>
                  <h3 className="head8">Cost = Rs.160</h3>
                  <h3 className="head8">Offer = 10%</h3>
                  <h3 className="head8">Delivery Charges = Rs.41</h3>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <div class="card" >
                <div class="card-body">
                  <img className="food2" src={require('../Image/food6.jpg')} alt="no image" /><br />
                  <center><h3 className="head7"> Veg Pulao</h3></center>
                  <h3 className="head8">Cost = Rs.130</h3>
                  <h3 className="head8">Offer = 15%</h3>
                  <h3 className="head8">Delivery Charges = Rs.22</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row row2">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <div class="card" >
                <div class="card-body">
                  <img className="food2" src={require('../Image/food7.jpg')} alt="no image" /><br />
                  <center><h3 className="head7">Paneer Butter Masala</h3></center>
                  <h3 className="head8">Cost = Rs.130</h3>
                  <h3 className="head8">Offer = 18%</h3>
                  <h3 className="head8">Delivery Charges = Rs.15</h3>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <div class="card" >
                <div class="card-body">
                  <img className="food2" src={require('../Image/food8.jpg')} alt="no image" /><br />
                  <center><h3 className="head7">Veg Noodles</h3></center>
                  <h3 className="head8">Cost = Rs.110</h3>
                  <h3 className="head8">Offer = 14%</h3>
                  <h3 className="head8">Delivery Charges = Free Delivery</h3>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <div class="card" >
                <div class="card-body">
                  <img className="food2" src={require('../Image/food9.jpg')} alt="no image" /><br />
                  <center><h3 className="head7">Gobi Manchurian</h3></center>
                  <h3 className="head8">Cost = Rs.60</h3>
                  <h3 className="head8">Offer = 8%</h3>
                  <h3 className="head8">Delivery Charges = Rs.19</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Offer;
