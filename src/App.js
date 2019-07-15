import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Component/Home';

function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route exact path="/" component={Home}></Route>
        </switch>
      </Router>
    </div>
  )
}

export default App;
