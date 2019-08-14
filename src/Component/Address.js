import React, { Component } from 'react';
import './Address.css'
import Navbar from './Navbar';
import Footer from './Footer';

class Address extends Component {
  render() {
    return (
      <div id="div7">
        <div class="container">
          <div class="row address">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
              <Navbar />
            </div>
          </div>
          <div class="row address">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 bg3">
              <center><h1 className="head9"><b>Address</b></h1></center>
              <label className="label13"><b>Door Number</b></label>
              <input className="ip11" type="text" name="number"></input><br></br><br></br>
              <label className="label14"><b>Landmark</b></label>
              <input className="ip12" type="text" name="landmark"></input><br></br><br></br>
              <center><button className="btn5">Submit</button></center>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
          </div>
          <div class="row address">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
              <Footer />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Address;