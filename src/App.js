import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Signin from './Component/Signin';
import Help from './Component/Help';

function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/signin" component={Signin}></Route>
          <Route exact path="/help" component={Help}></Route>
        </switch>
      </Router>
    </div>
  )
}

export default App;
