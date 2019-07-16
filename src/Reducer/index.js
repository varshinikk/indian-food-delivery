import {combineReducers} from 'redux';
import SignupReducer from './SignupReducer';
import SigninReducer from './SigninReducer';

export default combineReducers({
    SignupReducer,
    SigninReducer
});