import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Signin from './Component/Signin';
import Help from './Component/Help';
import Navbar from './Component/Navbar';
import Dashboard from './Component/Dashboard';
import Offer from './Component/Offer';
import Address from './Component/Address';
import Footer from './Component/Footer';
// import Restaurant from './Component/Restaurant';
import Menu from './Component/Menu';
import Food from './Component/Food';
import Cart from './Component/Cart';

function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/signin" component={Signin}></Route>
          <Route exact path="/help" component={Help}></Route>
          <Route exact path="/navbar" component={Navbar}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/offer" component={Offer}></Route>
          <Route exact path="/address" component={Address}></Route>
          <Route exact path="/footer" component={Footer}></Route>
          {/* <Route exact path="/restaurant" component={Restaurant}></Route> */}
          <Route exact path="/menu" component={Menu}></Route>
          <Route exact path="/food" component={Food}></Route>
          <Route exact path="/cart" component={Cart}></Route>
        </switch>
      </Router>
    </div>
  )
}

export default App;
