import React, { Component } from 'react';
import './Signup.css'
import {connect} from 'react-redux';
import {handleClick} from '../Actions/SignupAction';

class Signup extends Component{
  render(){
    return(
      <div id="box1">
        <div class="container">
          {/* <div class="row">
          <div class="col-sm-5 col-lg-5 col-md-5 col-xs-5"></div>
          <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
            <h1 className="heading1">Signup</h1>
          </div>
          <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div> 
          </div> */}
          <div class="row signup">
          <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>  
          <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
            <center><h1 className="heading1">Signup</h1></center>
            <label className="label2"><b>Name</b></label>
            <input className="ip3" type="text" name="name"></input><br></br><br></br>
            <label className="label3"><b>Phone Number</b></label>
            <input className="ip4" type="text" name="phone_number"></input><br></br><br></br>
            <label className="label4"><b>Email</b></label>
            <input className="ip5" type="text" name="email"></input><br></br><br></br>
            <label className="label5"><b>Password</b></label>
            <input className="ip6" type="password" name="password"></input><br></br><br></br> 
            <center><button className="btn3">Signin</button></center>
          </div>
          <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div> 
          </div>
        </div>
      </div>
       
      );
    }
}
const mapStateToProps=(state)=>{
    const{name,phone_number,email,password}=state.SignupReducer;
    return{name,phone_number,email,password};
};
export default connect(mapStateToProps,{handleClick})(Signup);
