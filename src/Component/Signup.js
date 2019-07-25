import React, { Component } from 'react';
import './Signup.css'
import { connect } from 'react-redux';
import {signup} from './backendFunction'
import { handleClick } from '../Actions/SignupAction';
import browserHistory from '../Utils/browserHistory';
 
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      phone_number:"",
      email: "",
      password: "",
      nerr: "",
      emailerr: "",
      phn: "",
      pswd: ""
    };
  }
  handlechange = (event) => {
    this.setState({
    [event.target.name]: event.target.value
    });
  }

  handleSubmit= (event) =>{
    debugger;
    event.preventDefault();
    // const {name, email, phone_number, password} = this.state;
    const user = {
      name: this.state.name,
      phone_number: this.state.phone_number,
      email: this.state.email,
      password: this.state.password
    }
    console.log(user)
    signup(user).then(res => {
      // if(name && email && phone_number && password){
      browserHistory.push('/signin')
    // }
    })

  // }
    let temp1 = 0;
    let nerr = this.state.name.length, emailerr = this.state.email.length, phn = this.state.phone_number.length, pswd = this.state.password.length;
    let reg_name = /^[A-Za-z]{2,10}$/;
    let reg_pswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,15})/;
    let reg_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let reg_phn = /^[0-9]{10}$/;

    if (nerr === 0) this.setState({ nerr: '*Name is required' });
    else if (!reg_name.test(this.state.name)) this.setState({ nerr: '*Invalid Name' });
    else temp1++;

    if (emailerr === 0) this.setState({ emailerr: '*Email is required' });
    else if (!reg_email.test(this.state.email)) this.setState({ emailerr: '*Invalid Email' });
    else temp1++;

    if (phn === 0) this.setState({ phn: '*Phone_Number is required' });
    else if (!reg_phn.test(this.state.phone_number)) this.setState({ phn: '*Invalid Phone_Number' });
    else temp1++;

    if (pswd === 0) this.setState({ pswd: '*Password is required' });
    else if (!reg_pswd.test(this.state.password)) this.setState({ pswd: '*Invalid Password' });
    else temp1++;

    if (temp1 > 3) {
      browserHistory.push('/signin');
    }
  }
  render() {
    return (
      <div id="box1">
        <div class="container">
          <div class="row signup">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
              <center><h1 className="heading1">Signup</h1></center>
              <label className="label2"><b>Name</b></label>
              <input className="ip3" type="text" onChange={this.handlechange} name="name"></input><br></br>
              <p className='msg'>{this.state.nerr}</p><br></br>
              <label className="label3"><b>Phone Number</b></label>
              <input className="ip4" type="text" onChange={this.handlechange} name="phone_number"></input><br></br>
              <p className='msg'>{this.state.phn}</p><br></br>
              <label className="label4"><b>Email</b></label>
              <input className="ip5" type="text" onChange={this.handlechange} name="email"></input><br></br>
              <p className='msg'>{this.state.emailerr}</p><br></br>
              <label className="label5"><b>Password</b></label>
              <input className="ip6" type="password" onChange={this.handlechange} name="password"></input><br></br>
              <p className='msg'>{this.state.pswd}</p><br></br>
              <center><button className="btn3" onClick={this.handleSubmit}>Signup</button></center>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
          </div>
        </div>
      </div>
    );
  } 
}
const mapStateToProps = (state) => {
  const { name, phone_number, email, password } = state.SignupReducer;
  return { name, phone_number, email, password };
};
export default connect(mapStateToProps, { handleClick })(Signup);