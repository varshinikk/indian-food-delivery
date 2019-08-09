import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { foodDetails} from '../Actions/LocationAction';
import browserHistory from '../Utils/browserHistory';

class Food extends Component {
  componentDidMount() {
    debugger;
    this.props.foodDetails(this.props.location.state.menuid);
  }
  // handleClick = (e, Rid) => {
  //   e.preventDefault();
  //   console.log(e.target.entry, Rid);
  //   browserHistory.push({ pathname: "", state: { menuid: menuid} })
  // }

  render() {
    return (
      <div>
        {this.props.foodarray.map((item, index) => (
          <div key={item.index} variant={"button-data-card-div"} entry={index} content={"More"}>
            <p>{item.foodName}</p>
            <p>{item.cost}</p>
            <button>ADD</button><br></br>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { error, message, foodarray } = state.LocationReducer;
  return { error, message, foodarray };
};

// export default RstDetails;
export default withRouter(connect(mapStateToProps, { foodDetails })(Food));