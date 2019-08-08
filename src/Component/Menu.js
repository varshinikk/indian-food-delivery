import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { RestDetails} from '../Actions/LocationAction';
import browserHistory from '../Utils/browserHistory';
// import FoodList from '../../components/FoodList';

class MenuList extends Component {
  componentDidMount() {
    debugger;
    this.props.RestDetails(this.props.location.state.Rid);
  }
  // handleClick = (e, menuId) => {
  //   e.preventDefault();
  //   console.log(e.target.entry, menuId);
  //   browserHistory.push({
  //     pathname: "/foodlist",
  //     state: { menuId: menuId }
  //   });

  render() {
    return (
      <div>
        {this.props.menuarray.map((item, index) => (
          <div key={item.index} onClick={(e) => this.handleClick(e, item._id)}>
            <p>{item.menuName}</p>
          </div>
        ))}
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