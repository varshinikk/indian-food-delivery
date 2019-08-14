import React, { Component } from 'react';
import './Signin.css'
import { connect } from 'react-redux';
import { signin } from './backendFunction'
import { handleClick } from '../Actions/SigninAction';
import browserHistory from '../Utils/browserHistory';
import Footer from './Footer';
import Navbar from './Navbar';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
      // emailerror: "",
      // pswderror: ""
    };
  }

  handlechange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    const user = {
    email: this.state.email,
    password: this.state.password
    }
    signin(user).then(res => {
    console.log(res);
    if(res==="User does not exist" || res==="wrong password"){
    alert(res)
    }
    else
    {
      browserHistory.push('/')
    }
    })
  }

  render() {
    return (
      <div id="box2">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12 nav">
              <Navbar />
            </div>
          </div>
          <div class="row signin">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 bg2">
              <center><h1 className="heading2">Signin</h1></center>
              <label className="label6" ><b>Email</b></label>
              <input className="ip7" type="text" name="email" onChange={this.handlechange}></input><br></br>
              <p className='msg1'>{this.state.emailerror}</p><br></br>
              <label className="label7" ><b>Password</b></label>
              <input className="ip8" type="password" name="password" onChange={this.handlechange}></input><br></br>
              <p className='msg1'>{this.state.pswderror}</p><br></br>
              <center><button className="btn4" onClick={this.handleSubmit}>Signin</button></center>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
          </div>
        </div>
        <div className="footerdiv">
          <Footer />
        </div>
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  const { email, password } = state.SignupReducer;
  return { email, password };
};
export default connect(mapStateToProps, { handleClick })(Signin);
