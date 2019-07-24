import axios from 'axios'


// const api = axios.create({
//     baseURL: 'http://localhost:3001/',
// })

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

// const apis = {
//     signin,
//     signup
// }

// export const studentProfile = profileuser => {
// return axios
// .post('users/studentProfile', {
// studentname: profileuser. studentname,
// address: profileuser. address,
// email: profileuser.email,
// mobileNumber: profileuser. mobileNumber
// })
// .catch(err => {
// console.log(err)
// })
// }





// handleSubmit(event) {
//     event.preventDefault();
//     const { firstname, username, email, password, confirmPassword, mobileNumber } = this.state;
//     this.setState({ submitted: true });
//     // if (firstName && username && email && password && confirmPassword && mobileNumber) {
//     // this.props.history.push('/login');
    
//     // }
//     const user = {
//     firstname: this.state.firstname,
//     username: this.state.username,
//     email: this.state.email,
//     password: this.state.password,
//     confirmPassword: this.state.confirmPassword,
//     mobileNumber: this.state.mobileNumber
//     }
//     register(user).then(res => {
//     if (firstname && username && email && password && confirmPassword && mobileNumber) {
//     this.props.history.push('/login')
//     }
//     })
//     }