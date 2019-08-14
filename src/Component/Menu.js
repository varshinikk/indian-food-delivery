import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { RestDetails } from '../Actions/LocationAction';
import browserHistory from '../Utils/browserHistory';
import Food from './Food';
import './Dashboard.css'
import Footer from './Footer';

class MenuList extends Component {
  componentDidMount() {
    debugger;
    this.props.RestDetails(this.props.location.state.Rid);
  }
  handleClick = (e, menuid) => {
    e.preventDefault();
    console.log(e.target.entry, menuid);
    browserHistory.push({
      pathname: "./food", state: { menuid: menuid }
    });
  }

  render() {
    return (
      <div id="menudiv4">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12 nav">
              <Navbar />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3 menudiv">
              <h2 className="menulist"><b>Menu List</b></h2>
              {this.props.menuarray.map((item, index) => (
                <div key={item.index} onClick={(e) => this.handleClick(e, item._id)}>
                  <p className="menu">{item.menuName}</p>
                </div>
              ))}
            </div>
            <div class="col-sm-5 col-lg-5 col-md-5 col-xs-5"></div>
            {/* <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
        <Food/>
      </div> */}
          </div>
        </div>
        <div className="menufooter">
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  const { error, message, menuarray } = state.LocationReducer;
  return { error, message, menuarray };
};

export default withRouter(connect(mapStateToProps, { RestDetails })(MenuList));