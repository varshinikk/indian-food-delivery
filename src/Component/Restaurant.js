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
              <Navbar />
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
                  <img className="hotel1" src={require('../Image/hotel3.jpeg')} alt="no image" /><br />
                  <center><h3>The Royal Afghan</h3></center>
                  <center><h3 className="loc">Bangalore</h3></center>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card" >
                <div class="card-body">
                  <img className="hotel1" src={require('../Image/hotel6.jpeg')} alt="no image" /><br />
                  <center><h3>Sannadige</h3></center>
                  <center><h3 className="loc">Mangalore</h3></center>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card" >
                <div class="card-body">
                  <img className="hotel1" src={require('../Image/hotel10.jpeg')} alt="no image" /><br />
                  <center><h3>Tiamo</h3></center>
                  <center><h3 className="loc">Bangalore</h3></center>
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
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card card1" >
                <div class="card-body">
                  <img className="hotel1" src={require('../Image/hotel4.jpeg')} alt="no image" /><br />
                  <center><h3>Saffron</h3></center>
                  <center><h3 className="loc">Bangalore</h3></center>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card card1" >
                <div class="card-body">
                  <img className="hotel1" src={require('../Image/hotel2.jpeg')} alt="no image" /><br />
                  <center><h3>Gajalee Sea Food</h3></center>
                  <center><h3 className="loc">Mangalore</h3></center>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card card1" >
                <div class="card-body">
                  <img className="hotel1" src={require('../Image/hotel9.jpeg')} alt="no image" /><br />
                  <center><h3>Oyster Bay</h3></center>
                  <center><h3 className="loc">Mysore</h3></center>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card card1" >
                <div class="card-body">
                  <img className="hotel1" src={require('../Image/hotel7.jpeg')} alt="no image" /><br />
                  <center><h3>By The Blue</h3></center>
                  <center><h3 className="loc">Mysore</h3></center>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card card1" >
                <div class="card-body">
                  <img className="hotel1" src={require('../Image/hotel11.jpeg')} alt="no image" /><br />
                  <center><h3>Whitefield Baking Company</h3></center>
                  <center><h3 className="loc">Bangalore</h3></center>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card card1" >
                <div class="card-body">
                  <img className="hotel1" src={require('../Image/hotel14.jpeg')} alt="no image" /><br />
                  <center><h3>Diesel Cafe</h3></center>
                  <center><h3 className="loc">Mangalore</h3></center>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card card1" >
                <div class="card-body">
                  <img className="hotel1" src={require('../Image/hotel12.jpeg')} alt="no image" /><br />
                  <center><h3>Ottimo</h3></center>
                  <center><h3 className="loc">Bangalore</h3></center>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card card1" >
                <div class="card-body">
                  <img className="hotel1" src={require('../Image/hotel8.jpeg')} alt="no image" /><br />
                  <center><h3>The Old House</h3></center>
                  <center><h3 className="loc">Mysore</h3></center>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card card1" >
                <div class="card-body">
                  <img className="hotel1" src={require('../Image/hotel13.jpeg')} alt="no image" /><br />
                  <center><h3>Karavalli</h3></center>
                  <center><h3 className="loc">Bangalore</h3></center>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card card1" >
                <div class="card-body">
                  <img className="hotel1" src={require('../Image/hotel15.jpeg')} alt="no image" /><br />
                  <center><h3>Cardamom</h3></center>
                  <center><h3 className="loc">Mangalore</h3></center>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card card1" >
                <div class="card-body">
                  <img className="hotel1" src={require('../Image/hotel16.jpg')} alt="no image" /><br />
                  <center><h3>Smoky The Sheesha Lounge</h3></center>
                  <center><h3 className="loc">Mangalore</h3></center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurant;