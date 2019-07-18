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
                    <p>Contact Us: indianfood@gmail.com</p>
                </div>
                <div class="col-sm-5 col-lg-5 col-md-5 col-xs-5">

                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Footer;