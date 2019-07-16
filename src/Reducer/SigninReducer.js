import * as ActionTypes from '../Actions/type';

const intialState = {
    phone_number:'',
    password:''
};

export default(state=intialState,action)=>{
    switch(action.type){
        case ActionTypes.UPDATE:{
            return{...state}
    }
        default:
            return state;
    }
}