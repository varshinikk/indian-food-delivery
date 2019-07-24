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
      password: ""
    };
  }
  handlechange = event => {
      this.setState({
      [event.target.name]: event.target.value
      });
      }

  handleSubmit=(event) =>{
    // event.preventDefault();
    // const { name,phone_number,email, password} = this.state;
    // this.setState({ submitted: true });

    const user = {
      name: this.state.name,
      phone_number: this.state.phone_number,
      email: this.state.email,
      password: this.state.password
    }
    console.log(user)
    signup(user).then(res => {
      // if (name && phone_number && email && password) {
        browserHistory.push('/signin')
      // }
    })
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
              <input className="ip3" type="text" onChange={this.handlechange} name="name"></input><br></br><br></br>
              <label className="label3"><b>Phone Number</b></label>
              <input className="ip4" type="text" onChange={this.handlechange} name="phone_number"></input><br></br><br></br>
              <label className="label4"><b>Email</b></label>
              <input className="ip5" type="text" onChange={this.handlechange} name="email"></input><br></br><br></br>
              <label className="label5"><b>Password</b></label>
              <input className="ip6" type="password" onChange={this.handlechange} name="password"></input><br></br><br></br>
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



// class Signup extends Component {
//   constructor(props) {
//   super(props);
  
//   this.state = {
//   email: "",
//   password: "",
//   confirmpassword: ""
//   };
//   }
  
//   validateForm() {
//   return this.state.email.length > 0 && this.state.password.length && this.state.confirmpassword.length > 0;
//   }
  
//   handleChange = event => {
//   this.setState({
//   [event.target.id]: event.target.value
//   });
//   }
  
//   handleSubmit = event => {
//   event.preventDefault();
//   // }
  
//   const { email, password, confirmpassword } = this.state;
//   this.setState({ submitted: true });
//   // if (firstName && username && email && password && confirmPassword && mobileNumber) {
//   // this.props.history.push('/login');
  
//   // }
//   const user = {
  
//   email: this.state.email,
//   password: this.state.password,
//   confirmpassword: this.state.confirmpassword,
//   }
//   signup(user).then(res => {
//   if (email&&password && confirmpassword) {
//   this.props.history.push('/login')
//   }
//   })
//   }