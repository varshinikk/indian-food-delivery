import React, { Component } from 'react';
import api from '../Api/index'
import Navbar from './Navbar';
import axios from 'axios';
import {cartDetails} from '../Actions/LocationAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Cart extends Component {
    constructor(props) {
        // super(props)
        // this.state = {
        //     carts: []
        // }
    }

    componentDidMount(){
    this.props.cartDetails();
      }

    //   add=(id) =>{
    //     let addedItem = this.state.Carts.find(item=> item._id === id)
    //     addedItem.Quantity += 1
    //     let newTotal = addedItem.Total_price + addedItem.Product_Price
    //     addedItem.Total_price=newTotal
    //          api.updateCart(id,addedItem).then(res => {
    //                 window.location.reload()
                    
    //             })
    // }
    // sub=(id)=>{
    //     let addedItem = this.state.Carts.find(item=> item._id === id)
    //     if(addedItem.Quantity===1){
    //         if (
    //             window.confirm(
    //                 `Do you want to remove this product "${addedItem.Product_Name}" permanently?`,
    //             )
    //         ) {
    //             api.Remove_itemById(id)
    //             window.location.reload()
    //         }
            
    //     }        
        
    //     else{
        
    //     addedItem.Quantity -= 1
    //     let newTotal = addedItem.Total_price - addedItem.Product_Price
    //     addedItem.Total_price=newTotal
    //          api.updateCart(id,addedItem).then(res => {
    //                 window.location.reload()
                    
    //             })
    //         }
    //         }

    // Remove_item = (id) => {
    //     let addedItem = this.state.Carts.find(item=> item._id === id)
    //     if (
    //         window.confirm(
    //             `Do you want to remove this product "${addedItem.Product_Name}" permanently?`,
    //         )
    //     ) {
    //         api.Remove_itemById(id)
    //         window.location.reload()
    //     }
    // }  

render() {
    return (
        <div>
        {this.props.cartarray.map((item, index) => {
            return <div key={item.index} >
              <p>{item.food_name}</p>
              <p>{item.price}</p>
              {/* <button>-</button> */}
              <p>{item.quantity}</p>
              {/* <button>+</button> */}
              <p>{item.total_price}</p>
              {/* <button>Remove</button> */}
            </div>
  })}
  <button onClick={this.checkout}>Check Out</button>
        </div>
    );
}
}



const mapStateToProps = (state) => {
    debugger;
    const {error, message,cartarray  } = state.LocationReducer;
    return {error, message,cartarray };
  };
  
  export default withRouter(connect(mapStateToProps, { cartDetails })( Cart));
// export default Cart;


