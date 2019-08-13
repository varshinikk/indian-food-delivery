import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { RestDetails} from '../Actions/LocationAction';
import browserHistory from '../Utils/browserHistory';
import Food from './Food';
import './Dashboard.css'

class MenuList extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     menuid:""
  //   }
  // }
  componentDidMount() {
    debugger;
    this.props.RestDetails(this.props.location.state.Rid);
  }
  handleClick = (e, menuid) => {
    e.preventDefault();
    console.log(e.target.entry, menuid);
    browserHistory.push({
      pathname: "./menu",state: { menuid: menuid }
    });
  }

  render() {
    return (
      <div id="div4">
      <div class="container">
      <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12 nav">
              <Navbar />
            </div>
      </div>
      <div class="row">
      <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
      <b><h2 className="menulist">MenuList</h2></b>
        {this.props.menuarray.map((item, index) => (
          <div key={item.index} onClick={(e) => this.handleClick(e, item._id)}>
            <p className="menu">{item.menuName}</p>
          </div>
        ))}
      </div>
      <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
        <Food/>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
// export default MenuList;
const mapStateToProps = (state) => {
  debugger;
  const {error, message, menuarray } = state.LocationReducer;
  return {error, message, menuarray };
};

export default withRouter(connect(mapStateToProps, { RestDetails })(MenuList));