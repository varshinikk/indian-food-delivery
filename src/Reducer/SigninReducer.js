import * as ActionTypes from '../Actions/type';

const intialState = {
  email: '',
  password: ''
};

export default (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE: {
      return { ...state }
    }
    default:
      return state;
  }
}