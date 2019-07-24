import React, { Component } from 'react';
import './Signin.css'
import {connect} from 'react-redux';
import {signin} from './backendFunction'
import {handleClick} from '../Actions/SigninAction';
import browserHistory from '../Utils/browserHistory';

class Signin extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      email: "",
      password: ""
    };
  }

  handlechange = event => {
    this.setState({
    [event.target.name]: event.target.value
    });
    }

  handleSubmit=(event)=> {
    // event.preventDefault();
    // const { email, password} = this.state;
    // this.setState({ submitted: true });

    const user = {
      email: this.state.email,
      password: this.state.password
    }
    signin(user).then(res => {
      // if (email && password) {
        browserHistory.push('/dashboard')
      // }
    })
  }

  render(){
    return(
      <div id="box2">
        <div class="container">
          <div class="row signin">
          <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>  
          <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 bg2">
            <center><h1 className="heading2">Signin</h1></center>
            <label className="label6" onChange={this.handlechange}><b>Email</b></label>
            <input className="ip7" type="text" name="email"></input><br></br><br></br>
            <label className="label7" onChange={this.handlechange}><b>Password</b></label>
            <input className="ip8" type="password" name="password"></input><br></br><br></br> 
            <center><button className="btn4" onClick={this.handleSubmit}>Signin</button></center>
          </div>
          <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div> 
          </div>
        </div>
      </div>
       
      );
    }
}
const mapStateToProps=(state)=>{
    const{email,password}=state.SignupReducer;
    return{email,password};
};
export default connect(mapStateToProps,{handleClick})(Signin);
