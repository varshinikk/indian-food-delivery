import React, { Component } from 'react';
import './Dashboard.css'
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { LocationDetails } from '../Actions/LocationAction';
import { connect } from 'react-redux';

class Dashboard extends Component {
  componentDidMount() {
    debugger;
    //    let select1 = JSON.parse(localStorage.getItem('select'));
    //    console.log(select1)
    //    this.setState({select: select1})
    this.props.LocationDetails(this.props.location.state.place);
  }
 
  render() {
    return (
      <div id="div4">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12 nav">
              <Navbar />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3 div5">
              <div class="sidebar">
                <a class="active" href="#">Popular Restaurants</a>
                <a href="./Offer">Offers</a>
                <a href="#">All Restaurants</a>
              </div>
            </div>

            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card" >
                <div class="card-body">
                  {this.props.Rstarray.map((item, index) => (
                    <div className="rest1" key={item.index} variant={"button-data-card-div"} entry={index} content={"More"}>
                      <p>{item.RImg}</p>
                      <p>{item.RName}</p>
                      <p>Delivery Charge : {item.DeliveryCharge}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // <div id="div4">
      //     {/* <div><Navbar/></div> */}
      //     <div class="container">
      //     <div class="row">
      //     <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12 nav">
      //         <Navbar/>
      //     </div>
      //     </div>
      //     <div class="row">
      //     <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3 div5">
      //         {/* <div id="mySidenav" class="sidenav">
      //             <a href="#" id="restaurants"> Popular Restaurants</a>
      //             <a href="#" id="offer">Offers</a>
      //             <a href="#" id="all">All Restaurants</a>
      //         </div> */}
      //         <div class="sidebar">
      //             <a class="active" href="#">Popular Restaurants</a>
      //             <a href="./Offer">Offers</a>
      //             <a href="./Restaurant">All Restaurants</a>
      //         </div>
      //     </div>
      //     <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
      //         <div class="card" >
      //         <div class="card-body">
      //             <img className="hotel1" src={require('../Image/hotel1.jpeg')} alt="no image" /><br />
      //             <center><h3>Infinit</h3></center>
      //             <center><h3 className="loc">Mysore</h3></center>
      //         </div>
      //         </div>
      //     </div>
      //     <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
      //         <div class="card" >
      //         <div class="card-body">
      //             <img className="hotel1" src={require('../Image/hotel2.jpeg')} alt="no image" /><br />
      //             <center><h3>Gajalee Sea Food</h3></center>
      //             <center><h3 className="loc">Mangalore</h3></center>
      //         </div>
      //         </div>
      //     </div>
      //     <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
      //         <div class="card" >
      //         <div class="card-body">
      //             <img className="hotel1" src={require('../Image/hotel3.jpeg')} alt="no image" /><br />
      //             <center><h3>The Royal Afghan</h3></center>
      //             <center><h3 className="loc">Bangalore</h3></center>
      //         </div>   
      //         </div>
      //     </div>
      //     </div>
      //     <div class="row">
      //     <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3 div6"></div>
      //     <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
      //     <div class="card card1" >
      //         <div class="card-body">
      //             <img className="hotel4" src={require('../Image/hotel5.jpeg')} alt="no image" /><br />
      //             <center><h3>Frosting</h3></center>
      //             <center><h3 className="loc">Mysore</h3></center>
      //         </div>   
      //     </div>
      //     </div>
      //     <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
      //     <div class="card card1" >
      //         <div class="card-body">
      //             <img className="hotel4" src={require('../Image/hotel6.jpeg')} alt="no image" /><br />
      //             <center><h3>Sannadige</h3></center>
      //             <center><h3 className="loc">Mangalore</h3></center>
      //         </div>   
      //         </div>
      //     </div>
      //     <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
      //     <div class="card card1" >
      //         <div class="card-body">
      //             <img className="hotel4" src={require('../Image/hotel4.jpeg')} alt="no image" /><br />
      //             <center><h3>Saffron</h3></center>
      //             <center><h3 className="loc">Bangalore</h3></center>
      //         </div>   
      //         </div>
      //     </div>
      //     </div>
      // </div>
      // </div>

    );
  }
}
// export default Dashboard;
const mapStateToProps = (state) => {
  const { error, message, Rstarray } = state.LocationReducer;
  return { error, message, Rstarray };
};

// export default RstDetails;
export default withRouter(connect(mapStateToProps, { LocationDetails })(Dashboard));