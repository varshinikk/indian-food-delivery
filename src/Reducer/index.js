import { combineReducers } from 'redux';
import SignupReducer from './SignupReducer';
import SigninReducer from './SigninReducer';
import LocationReducer from './LocationReducer';

export default combineReducers({
  SignupReducer,
  SigninReducer,
  LocationReducer
});