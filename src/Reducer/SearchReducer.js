import * as ActionTypes from '../Actions/type';

const initialState = {
    todos: [],
    loading: false
  };

  export default(state=initialState,action)=>{
    switch(action.type) {
      case ActionTypes.SEARCH: return { ...state, loading: false,todos:action.payload.res};;
      default: return state;
    }
  };
