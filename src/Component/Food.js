import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { foodDetails } from '../Actions/LocationAction';
import './Food.css'
import { addTocart } from './backendFunction'
import Navbar from './Navbar';
import Footer from './Footer';
import Cart from './Cart';

class Food extends Component {
  componentDidMount() {
    debugger;
    this.props.foodDetails(this.props.location.state.menuid);
  }

  AddCart(id) {
    debugger
    let addedItem = this.props.foodarray.find(item => item._id === id)
    const payload = {
      food_name: addedItem.foodName,
      price: addedItem.cost,
      quantity: 1,
      total_price: addedItem.cost

    }
    addTocart(payload).then(res => {
      window.alert("Sucessfully added to cart")
    })

  }
  render() {
    return (
      <div id="fooddiv4">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12 nav">
              <Navbar />
            </div>
          </div>
          <div class="row">
            {/* <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2"></div> */}
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <h2 className="foodlist"><b>Food Items</b></h2>
              {this.props.foodarray.map((item, index) => (
                <div key={item.index} variant={"button-data-card-div"} entry={index} content={"More"}>
                  <p className="fname">{item.foodName}</p>
                  <p className="fcost">{item.cost}</p>
                  <button className="fbtn" onClick={this.AddCart.bind(this, item._id)}>ADD</button><br></br>
                </div>
              ))}
            </div>
            {/* <Cart /> */}
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            {/* <div class="col-sm-2 col-lg-2 col-md-2 col-xs-2"></div> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { error, message, foodarray } = state.LocationReducer;
  return { error, message, foodarray };
};

export default withRouter(connect(mapStateToProps, { foodDetails })(Food));