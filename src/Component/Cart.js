import React, { Component } from 'react';
import api from '../Api/index'
import Navbar from './Navbar';
import axios from 'axios'
// import {getcart} from './backendFunction'
// imprt { Form } from 'react-bootstrap';

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Carts: [],
            columns: [],
            id:'',
            food_name:"",
            price:"",
            quantity:'',
            total_price:"",
            Address:'',
            isLoading: true,
            Address_message:""
        }
    }
    PlaceOrder = async () => {
        debugger
    const { food_name,  price, quantity, total_price,  Address } = this.state
    const payload1 = { food_name,  price, quantity, total_price,  Address  }
    debugger;
    let a=0;
        if(!this.state.Address)
            {
                a=1;
                const Address_message = "Address is empty"
                this.setState({ Address_message })
            } 
        if(a==0){
            
             api.PlaceOrder(payload1).then(res => {

                // window.location.reload()
                 debugger              
                     this.setState({
                        food_name:"",
                        Product_Name:"",
                        Product_Price:'',
                        Product_Quantity:"",
                        Product_Totalprice:'',
                        Address:'',
                        Address_message:""
                    })
        
                })
                debugger
                let addedItem = this.state.Carts.find(item=> item._id === this.state.id)
                api.Remove_itemById(this.state.id)
                window.location.reload()
             }
        }

    handleChangeInputAddress = async event => {
        const Address = event.target.value
        this.setState({ Address })
}

    // close(){
    //     debugger
    //     this.setState({
    //         mobile1Open: ! this.state.mobile1Open
    //     });
    // }
    Buy_now(id) {
        debugger
        let addedItem = this.state.Carts.find(item=> item._id === id)
        this.setState({
                      
          id:addedItem._id,
          Product_Brand:addedItem.Product_Brand,
          Product_Name:addedItem.Product_Name,
          Product_Price:addedItem.Product_Price,
          Product_Quantity:addedItem.Quantity,
          Product_Totalprice:addedItem.Total_price,
          mobile1Open: ! this.state.mobile1Open
          
        });
        // browserHistory.push(pathname:'/menu');
      }
    add=(id) =>{
        let addedItem = this.state.Carts.find(item=> item._id === id)
        addedItem.Quantity += 1
        let newTotal = addedItem.Total_price + addedItem.Product_Price
        addedItem.Total_price=newTotal
             api.updateCart(id,addedItem).then(res => {
                    window.location.reload()
                    
                })
    }
    sub=(id)=>{
        let addedItem = this.state.Carts.find(item=> item._id === id)
        if(addedItem.Quantity===1){
            if (
                window.confirm(
                    `Do you want to remove this product "${addedItem.Product_Name}" permanently?`,
                )
            ) {
                api.Remove_itemById(id)
                window.location.reload()
            }
            
        }        
        
        else{
        
        addedItem.Quantity -= 1
        let newTotal = addedItem.total_price - addedItem.price
        addedItem.Total_price=newTotal
             api.updateCart(id,addedItem).then(res => {
                    window.location.reload()
                    
                })
            }
            }

    Remove_item = (id) => {
        let addedItem = this.state.Carts.find(item=> item._id === id)
        if (
            window.confirm(
                `Do you want to remove this product "${addedItem.food_name}" permanently?`,
            )
        ) {
            api.Remove_itemById(id)
            window.location.reload()
        }
    }
    componentDidMount(){
        debugger
        axios.get('http://localhost:3001/getcart').then(response => {
              debugger
            this.setState({ Carts: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
// b=()=>
// getcart().then(res => {
//     window.alert("Sucessfully added to cart")
//     // browserHistory.push('/signin')
//   })
    render(){
       
        const { Address } = this.state
        console.log(this.state.Carts)
        return(
            <div>
                {/* <Navbar /> */}
                <button onClick={this.b} >CheckOut</button>
                 {this.state.Carts.map((item,index)=>(
                     <div key="index">
                       
                         Name:{item.food_name}<br></br>
                         Product Price:{item.price}<br></br>
                         Quantity:<button onClick={this.sub.bind(this, item._id)}>-</button>{item.Quantity} <button onClick={this.sub.bind(this, item._id)}>+</button><br></br>
                         Total price:{item.total_price}<br></br>
                        <hr></hr>
                        <button  onClick={this.Buy_now.bind(this, item._id)}>CheckOut</button>
                        <button onClick={this.Remove_item.bind(this, item._id)}>Remove</button>
                     </div>
                 )

)}
</div>);
}}

export default Cart;