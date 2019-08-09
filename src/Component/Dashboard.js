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
          <div class="row">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3 div5">
              <div class="sidebar">
                <a class="active" href="#">Popular Restaurants</a>
                <a href="./Offer">Offers</a>
                <a href="">All Restaurants</a>
              </div>
            </div>

            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card" >
                <div class="card-body">
                  {this.props.Rstarray.map((item, index) => {
                  if(item.RName === "Infint"){
                    return(
                  
                    <div className="rest1" key={item.index} variant={"button-data-card-div"} entry={index} content={"More"} onClick={(e)=>this.handlesubmit(e,item._id)}>
                      <p>{item.RImg}</p>
                      <p>{item.RName}</p>
                      <p>Delivery Charge : {item.DeliveryCharge}</p>
                    </div> )}
                  })}
                </div>
              </div>
              </div>

              <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card" >
                <div class="card-body">
                  {this.props.Rstarray.map((item, index) => {
                  if(item.RName === "Frosting"){
                    return(
                  
                    <div className="rest1" key={item.index} variant={"button-data-card-div"} entry={index} content={"More"} onClick={(e)=>this.handlesubmit(e,item._id)}>
                      <p>{item.RImg}</p>
                      <p>{item.RName}</p>
                      <p>Delivery Charge : {item.DeliveryCharge}</p>
                    </div> )}
                  })}
                </div>
              </div>
              </div>

              <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3">
              <div class="card" >
                <div class="card-body">
                  {this.props.Rstarray.map((item, index) => {
                  if(item.RName === "Oyster Bay" || item.RName === "Tiamo"){
                    return(
                  
                    <div className="rest1" key={item.index} variant={"button-data-card-div"} entry={index} content={"More"} onClick={(e)=>this.handlesubmit(e,item._id)}>
                      <p>{item.RImg}</p>
                      <p>{item.RName}</p>
                      <p>Delivery Charge : {item.DeliveryCharge}</p>
                    </div> )}
                  })}
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



// {
//   let itemList = this.state.Products.map(item=>{
//   return(
//   <div className="card1" key={item.id}> 
//   <div className="card-content">
//   <b>Product Name:</b><span className="card-titl">{item.Product_Name}</span>
//   <br></br>
//   <p><b>Details:</b>{item.Product_Discription}</p>
//   <p><b>Price:</b> {item.Product_Price}Rs</p>
//   <Button color="primary" onClick={this.AddCart.bind(this, item._id)}>Add to Cart</Button>
//   </div>
//   </div>
//   )
  
//   })
  
//   return(
//   <div>
//   <h3 >Our items</h3>
//   <Navbar1/>
//   <Product_Navbar/>
//   <h3 className="page_head" ><b>Our items</b></h3> 
//   <div className="containe"> 
//   <br></br>
//   <div className="box1">
//   {itemList}
  
//   </div>
//   </div>
//   </div>
//   )