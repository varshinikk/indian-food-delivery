import React, { Component } from 'react';
import './Home.css'
import browserHistory from '../Utils/browserHistory';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";


class Home extends Component {

  handlepress = () => {
    browserHistory.push('/signup');
  }
  handleclick = () => {
    browserHistory.push('/signin');
  }
  render() {
    return (
      <div id="div1">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
              <img className="logo" src={require('../Image/logo1.png')} alt="no image"></img>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <button className="btn1" onClick={this.handlepress}>Signup</button>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <button className="btn2" onClick={this.handleclick}>Signin</button>
            </div>
          </div>
          <div class="row">
            <div id="loc" class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
              <label className="label1"><b>Location</b></label>
              <input className="ip1" type="text" name="location"></input>
              <input className="ip2" type="text" name="search" placeholder="Search..."></input>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="item active">
                    <img className="slide1" src={require('../Image/breakfast.jpg')} alt="Los Angeles" />
                  </div>
                  <div className="item">
                    <img className="slide1" src={require('../Image/full_meals.jpg')} alt="Chicago" />
                  </div>
                  <div className="item">
                    <img className="slide1" src={require('../Image/food.jpg')} alt="New york" />
                  </div>
                </div>
                <a id="slide" class="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a id="slide" class="right carousel-control" href="#myCarousel" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <div class="dropdown">
                <img className="pic1" src={require('../Image/pic1.jpg')} alt="no image"></img>
                <div class="dropdown-content">
                  <center><label>Veg Fired Rice</label></center>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <div class="dropdown">
                <img className="pic2" src={require('../Image/pic2.jpg')} alt="no image"></img>
                <div class="dropdown-content">
                  <center><label>Fruit Juice</label></center>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <div class="dropdown">
                <img className="pic3" src={require('../Image/pic3.jpeg')} alt="no image"></img>
                <div class="dropdown-content">
                  <center><label>Veg Salad</label></center>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
              <h3 className="head"><b>Description :</b></h3>
              <p className="p1">Online food ordering is the process of ordering food through the restaurant's own website or mobile app, or through a multi-restaurant's website or app. A customer can choose to have the food delivered or for pick-up. The process consists of a customer choosing the restaurant of their choice, scanning the menu items, choosing an item, and finally choosing for pick-up or delivery</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;