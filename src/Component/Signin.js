import React, { Component } from 'react';
import './Signin.css'
import {connect} from 'react-redux';
import {handleClick} from '../Actions/SigninAction';

class Signin extends Component{
  render(){
    return(
      <div id="box2">
        <div class="container">
          <div class="row">
          <div class="col-sm-5 col-lg-5 col-md-5 col-xs-5"></div>
          <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
            <h1 className="heading2">Signin</h1>
          </div>
          <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div> 
          </div>
          <div class="row">
          <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>  
          <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
            <label className="label6"><b>Phone Number</b></label>
            <input className="ip7" type="text" name="phone_number"></input><br></br><br></br>
            <label className="label7"><b>Password</b></label>
            <input className="ip8" type="password" name="password"></input><br></br><br></br> 
            <button className="btn4">Signin</button>
          </div>
          <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div> 
          </div>
        </div>
      </div>
       
      );
    }
}
const mapStateToProps=(state)=>{
    const{phone_number,password}=state.SignupReducer;
    return{phone_number,password};
};
export default connect(mapStateToProps,{handleClick})(Signin);
