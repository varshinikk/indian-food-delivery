import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { foodDetails} from '../Actions/LocationAction';

import {addTocart} from './backendFunction'
import browserHistory from '../Utils/browserHistory';
import axios from 'axios'
import Navbar from './Navbar';

class Food extends Component {
  componentDidMount() {
    debugger;
    this.props.foodDetails(this.props.location.state.menuid);
  }

  AddCart(id){
    debugger
    let addedItem = this.props.foodarray.find(item=> item._id === id)
    const payload = {
        food_name:addedItem.foodName,
        price:addedItem.cost,
        quantity:1,
        total_price:addedItem.cost
       
      }
    addTocart(payload).then(res => {
      window.alert("Sucessfully added to cart")
      // browserHistory.push('/signin')
    })
    
}
  render() {
    return (
      <div>
        <Navbar />
        {this.props.foodarray.map((item, index) => (
          <div key={item.index} variant={"button-data-card-div"} entry={index} content={"More"}>
            <p>{item.foodName}</p>
            <p>{item.cost}</p>
            <button onClick={this.AddCart.bind(this, item._id)}>ADD</button><br></br>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { error, message, foodarray } = state.LocationReducer;
  return { error, message, foodarray };
};

// export default RstDetails;
export default withRouter(connect(mapStateToProps, { foodDetails })(Food));