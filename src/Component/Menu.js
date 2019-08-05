import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LocationDetails } from '../../Actions/LocationAction';
import browserHistory from '../../utils/browserHistory';

class Menu extends Component {
  componentDidMount() {
    debugger;
    this.props.RestDetails(this.props.location.state.place);
  }
  handleClick = (e, Rid) => {
    e.preventDefault();
    console.log(e.target.entry, Rid);
    browserHistory.push({ pathname: "/menu", state: { Rid: Rid } })
  }

  render() {
    return (
      <div>
        <h1> place={this.props.location.state.place}</h1>
        {this.props.Rstarray.map((item, index) => (
          <div key={item.index} onClick={(e) => this.handleClick(e, item._id)} variant={"button-data-card-div"}
            entry={index}
            content={"More"}>
            <p>{item.menuName}</p>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { error, message, menuarray } = state.LocationReducers;
  return { error, message, menuarray };
};

// export default RstDetails;
export default withRouter(connect(mapStateToProps, { LocationDetails })(Menu));