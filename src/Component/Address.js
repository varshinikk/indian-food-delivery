import React, { Component } from 'react';
import './Address.css'

class Address extends Component {
    render() {
        return (
            <div id="div7">
                <div class="container">
                <div class="row">
                <div class="col-sm-5 col-lg-5 col-md-5 col-xs-5"></div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
                    <h1 className="head9"><b>Address</b></h1>
                </div>
                <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div> 
                </div>
                <div class="row">
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>  
                <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
                    <label className="label13"><b>Door Number</b></label>
                    <input className="ip11" type="text" name="number"></input><br></br><br></br>
                    <label className="label14"><b>Landmark</b></label>
                    <input className="ip12" type="text" name="landmark"></input><br></br><br></br>
                    <button className="btn3">Submit</button>
                </div>
                <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div> 
                </div>
                </div>
            </div>
        );
    }
}

export default Address;