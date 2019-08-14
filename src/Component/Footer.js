import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div id="div8">
        <div class="container">
          <div class="row">
            <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2">
              <img className="logo2" src={require('../Image/logo1.png')} alt="no image"></img>
            </div>
            <div class="col-sm-5 col-lg-5 col-md-5 col-xs-5">
              <p className="p10">Contact Us: indianfood@gmail.com</p>
            </div>
            <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2">
              <p className="p10">Follow Us On</p>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <i class="fa fa-instagram icon1"></i>
              <i class="fa fa-facebook-square icon2"></i>
              <i class="fa fa-twitter icon3"></i>
              <i class="fa fa-youtube-play icon4"></i>
            </div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <p className="p11">@ 2019 Copyright - All Rights Reserved</p>
            </div>
            <div class="col-sm-5 col-lg-5 col-md-5 col-xs-5"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;