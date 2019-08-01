import {combineReducers} from 'redux';
import SignupReducer from './SignupReducer';
import SigninReducer from './SigninReducer';
import SearchReducer from './SearchReducer';
import LocationReducer from './LocationReducer';

export default combineReducers({
    SignupReducer,
    SigninReducer,
    // SearchReducer,
    LocationReducer
});