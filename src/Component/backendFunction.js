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
        console.log('login successfully')
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


// const getcart = get => {
//     debugger
//      return axios
//      .get('getcart')
//     //  .get('getcart', {
        
//     //      name: newUser.name,
//     //      phone_number: newUser.phone_number,
//     //      email: newUser.email,
//     //      password: newUser.password
//     //  })
//      .then(res => {
//          console.log('registered successfully')
//      })
//  }