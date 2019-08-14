import * as ActionTypes from './type';
import axios from 'axios'
import browserHistory from '../Utils/browserHistory';

export function BeginFunc(ActionType) {
  return { type: ActionType }
}

export function SuccessFunc(ActionType, result) {
  return {
    type: ActionType,
    payload: result
  }
}

export function ErrorFunc(ActionType, error) {
  return {
    type: ActionType,
    payload: error
  }
}

export function LocationDetails(Location1) {
  debugger;
  return dispatch => {

    dispatch(BeginFunc(ActionTypes.FETCH_LOCATION_BEGIN));
    let path = "/getbyLocId/";
    axios.get('getbyLocId/' + Location1, {})
      .then(response => {

        dispatch(SuccessFunc(ActionTypes.FETCH_LOCATION_SUCCESS, response.data.result));
        console.log(response)
      })
  };
}

export function RestDetails(Rid) {
  debugger;
  return dispatch => {
    dispatch(BeginFunc(ActionTypes.FETCH_RST_BEGIN));
    let path = "getmenulist/";
    axios.get('getmenulist/' + Rid, {})
      .then(response => {
        dispatch(SuccessFunc(ActionTypes.FETCH_RST_SUCCESS, response.data.result));
        console.log(response)
      })
  };
}

// food details
export function foodDetails(menuid) {
  debugger;
  return dispatch => {

    dispatch(BeginFunc(ActionTypes.FETCH_FOOD_BEGIN));
    let path = "getfoodlist/";
    axios.get('getfoodlist/' + menuid, {})
      .then(response => {
        dispatch(SuccessFunc(ActionTypes.FETCH_FOOD_SUCCESS, response.data.result));
        console.log(response)
      })
  };
}

export function cartDetails() {
  return dispatch => {
    dispatch(BeginFunc(ActionTypes.FETCH_CARD_BEGIN));
    axios.get('/getcart')
      .then(response => {
        dispatch(SuccessFunc(ActionTypes.FETCH_CARD_SUCCES, response.data));
        console.log(response)
      })
  };
}