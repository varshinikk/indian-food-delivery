import axios from 'axios'
// import { SEARCH } from '../Actions/SignupAction';

export const signup = newUser => {
  debugger
  return axios
    .post('signup', {

      name: newUser.name,
      phone_number: newUser.phone_number,
      email: newUser.email,
      password: newUser.password
    })
    .then(res => {
      console.log('registered successfully')
    })
}

export const signin = user => {
  return axios
    .post('signin', {
      email: user.email,
      password: user.password
    })
    .then(res => {
      console.log(res,"back")
      localStorage.setItem('usertoken', res.data)
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const addTocart = cart => {
  debugger
  return axios
    .post('addcart', {

      food_name: cart.food_name,
      price: cart.price,
      quantity: cart.quantity,
      total_price: cart.total_price
    })
    .then(res => {
      console.log('registered successfully')
    })
}

export const Remove_items = cart => {
  debugger
  return axios
    .delete(`deletecart/${cart}`)
    .then(res => {
      console.log('registered successfully')
    })
}

export const add_item = upcart => {
  debugger
  return axios
    .put(`updateCart/${upcart._id}`, {
      food_name: upcart.food_name,
      price: upcart.price,
      quantity: upcart.quantity,
      total_price: upcart.total_price
    })
    .then(res => {
      console.log('registered successfully')
    })
}