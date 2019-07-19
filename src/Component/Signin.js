import React, { Component } from 'react';
import './Signin.css'
import {connect} from 'react-redux';
import {handleClick} from '../Actions/SigninAction';

class Signin extends Component{
  render(){
    return(
      <div id="box2">
        <div class="container">
          <div class="row signin">
          <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>  
          <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 bg2">
            <center><h1 className="heading2">Signin</h1></center>
            <label className="label6"><b>Email</b></label>
            <input className="ip7" type="text" name="email"></input><br></br><br></br>
            <label className="label7"><b>Password</b></label>
            <input className="ip8" type="password" name="password"></input><br></br><br></br> 
            <center><button className="btn4">Signin</button></center>
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
