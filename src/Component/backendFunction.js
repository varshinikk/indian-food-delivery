import axios from 'axios'

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