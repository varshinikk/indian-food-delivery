import React, { Component } from 'react';
import Navbar from './Navbar';
import './Food.css'
import { cartDetails } from '../Actions/LocationAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import browserHistory from '../Utils/browserHistory';
import { Remove_items, add_item } from './backendFunction'
import Footer from './Footer';

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carts: []
    }
  }
  componentDidMount() {
    this.props.cartDetails();
    this.setState(this.state.carts = this.props.cartarray)
  }

  checkout = () => {
    browserHistory.push('/Address')
  }

  add = (id) => {
    debugger
    let addedItem = this.props.cartarray.find(item => item._id === id)
    console.log(this.props.cartarray)
    addedItem.quantity += 1
    let newTotal = addedItem.total_price + addedItem.price
    addedItem.total_price = newTotal
    add_item(addedItem).then(res => {
      window.location.reload();
    })
  }

  sub = (id) => {
    debugger
    let addedItem = this.props.cartarray.find(item => item._id === id)
    console.log(this.props.cartarray)
    addedItem.quantity -= 1
    let newTotal = addedItem.total_price - addedItem.price
    addedItem.total_price = newTotal
    //  api.updateCart(id,addedItem).then(res => {
    //         window.location.reload()

    //     })
    add_item(addedItem).then(res => {
      window.location.reload();
    })
  }

  Remove_items = (id) => {
    // debugger
    Remove_items(id).then(res => {
      window.alert("Sucessfully deleted from cart")
      window.location.reload();
    })
  }

  render() {
    return (
      <div id="cartdiv4">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12 nav">
              <Navbar />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <h2 className="cartitems"><b>Cart Items</b></h2>
              {this.props.cartarray.map((item, index) => {
                return <div key={item.index} >
                  <p className="cname">{item.food_name}</p>
                  <p className="cprice">Rs.{item.price}</p>
                  <button className="cbtn1" onClick={this.sub.bind(this, item._id)}><b>-</b></button>
                  <b className="cquantity">{item.quantity}</b>
                  <button className="cbtn2" onClick={this.add.bind(this, item._id)}><b>+</b></button>
                  <p className="ctotal">Rs.{item.total_price}</p>
                  <button className="cbtn3" onClick={this.Remove_items.bind(this, item._id)}>Remove</button>
                </div>
              })}
              <button className="cbtn4" onClick={this.checkout}>Check Out</button>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  const { error, message, cartarray } = state.LocationReducer;
  return { error, message, cartarray };
};

export default withRouter(connect(mapStateToProps, { cartDetails })(Cart));