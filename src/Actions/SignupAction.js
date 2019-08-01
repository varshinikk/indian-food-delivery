import *as ActionTypes from './type';

export function handleClick(){
        return function(dispatch){
            dispatch({type:"CLICK"});
      }
}

// export function SEARCH(){
//     return function(dispatch){
//         dispatch({type:"SEARCH"});
//   }
// }