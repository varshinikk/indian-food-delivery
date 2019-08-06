// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { LocationDetails } from '../Actions/LocationAction'

// class Menu extends Component {
//   componentWillMount() {
//     debugger;
//     this.props.RestDetails(this.props.restaurant.state.rest);
//   }

//   render() {
//     return (
//       <div>
//         <h1> place={this.props.restaurant.state.place}</h1>
//         {this.props.Rstarray.map((item, index) => (
//           <div key={item.index} onClick={(e) => this.handleClick(e, item._id)} variant={"button-data-card-div"} entry={index} content={"More"}>
//             <p>{item.menuName}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   const {Rstarray} = state.LocationReducers;
//   return {Rstarray};
// };

// // export default RstDetails;
// export default withRouter(connect(mapStateToProps, { LocationDetails })(Menu));


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RestDetails } from '../Actions/LocationAction';
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

  // }
  render() {
    return (
      <div>
        list all menu
          {this.props.menuarray.map((item, index) => (
          <div key={item.index} onClick={(e) => this.handleClick(e, item._id)} variant={"button-data-card-div"}
            entry={index}
            content={"More"}>
            <p>{item.menuName}</p>
          </div>
        ))}
        all details
{/* <FoodList /> */}

      </div>
    );
  }
}

// export default MenuList;
const mapStateToProps = (state) => {
  const { menuarray } = state.LocationReducers;
  return { menuarray };
};

export default withRouter(connect(mapStateToProps, { RestDetails })(MenuList));
