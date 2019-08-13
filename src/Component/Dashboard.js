import React, { Component } from 'react';
import './Dashboard.css'
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { LocationDetails } from '../Actions/LocationAction';
import { connect } from 'react-redux';
import browserHistory from '../Utils/browserHistory';

class Dashboard extends Component {
  handlesubmit = (e, Rid) => {
    debugger;
    e.preventDefault();
    console.log(e.target.entry, Rid);
    browserHistory.push({ pathname:'/menu',state:{Rid:Rid}});
  }

  componentDidMount() {
    // debugger;
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

          <div id="pop">
          <div class="row">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3 div5">
              <div class="sidebar">
                <a class="active" href="#pop">Popular Restaurants</a>
                <a href="./Offer">Offers</a>
                <a href="#allrest">All Restaurants</a>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card card1" >
                <div class="card-body card4">
                  {this.props.Rstarray.map((item, index) => {
                  if(item.RName === "Infint" || item.RName === "The Royal Afghan" || item.RName === "Sannadige"){
                    return(
                    <div className="rest1" key={item.index} variant={"button-data-card-div"} entry={index} content={"More"} onClick={(e)=>this.handlesubmit(e,item._id)}>
                      {/* <p className="name">{item.RImg}</p> */}
                      <center><p className="name">{item.RName}</p></center>
                      <center><p className="charge">Delivery Charge : {item.DeliveryCharge}</p></center>
                    </div> )}
                  })}
                </div>
              </div>
              </div>

              <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card" >
                <div class="card-body bodycolor">
                  {this.props.Rstarray.map((item, index) => {
                  if(item.RName === "Frosting" || item.RName === "Tiamo" || item.RName === "Gajalee Sea Food"){
                    return(
                    <div className="rest1" key={item.index} variant={"button-data-card-div"} entry={index} content={"More"} onClick={(e)=>this.handlesubmit(e,item._id)}>
                      {/* <p>{item.RImg}</p> */}
                      <center><p className="name">{item.RName}</p></center>
                      <center><p className="charge">Delivery Charge : {item.DeliveryCharge}</p></center>
                    </div> )}
                  })}
                </div>
              </div>
              </div>
              <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>  
          </div>
          </div>
          <div id="allrest">
          <div class="row">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card" >
                <div class="card-body">
                  {this.props.Rstarray.map((item, index) => {
                  if(item.RName === "Oyster Bay" || item.RName === "Saffron" || item.RName === "Diesel Cafe"){
                    return(
                    <div className="rest1" key={item.index} variant={"button-data-card-div"} entry={index} content={"More"} onClick={(e)=>this.handlesubmit(e,item._id)}>
                      {/* <p>{item.RImg}</p> */}
                      <center><p className="name">{item.RName}</p></center>
                      <center><p className="charge">Delivery Charge : {item.DeliveryCharge}</p></center>
                    </div> )}
                  })}
                </div>
              </div>
              </div>
              <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card" >
                <div class="card-body">
                  {this.props.Rstarray.map((item, index) => {
                  if(item.RName === "By The Blue" || item.RName === "Ottimo" || item.RName === "Cardamom"){
                    return(
                    <div className="rest1" key={item.index} variant={"button-data-card-div"} entry={index} content={"More"} onClick={(e)=>this.handlesubmit(e,item._id)}>
                      {/* <p>{item.RImg}</p> */}
                      <center><p className="name">{item.RName}</p></center>
                      <center><p className="charge">Delivery Charge : {item.DeliveryCharge}</p></center>
                    </div> )}
                  })}
                </div>
              </div>
              </div>
              <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card" >
                <div class="card-body">
                  {this.props.Rstarray.map((item, index) => {
                  if(item.RName === "The Old House" || item.RName === "Karavalli" || item.RName === "Smoky The Sheesha Lounge"){
                    return(
                    <div className="rest1" key={item.index} variant={"button-data-card-div"} entry={index} content={"More"} onClick={(e)=>this.handlesubmit(e,item._id)}>
                      {/* <p>{item.RImg}</p> */}
                      <center><p className="name">{item.RName}</p></center>
                      <center><p className="charge">Delivery Charge : {item.DeliveryCharge}</p></center>
                    </div> )}
                  })}
                </div>
              </div>
              </div>
          </div>
          </div>
        </div>
      </div>

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