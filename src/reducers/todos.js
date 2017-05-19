import * as types from '../constants/ActionTypes'
import {Map, List} from 'immutable';
import { handleActions } from 'redux-actions';

let initialState = Map({
        items: List([])
    });

export default handleActions({
    [types.ADD_TODO]: (state, action) => {
        return state.update('items', value => value.push({key:new Date().getTime(),text:action.payload.text}));
    },
    [types.QUERY_TODO]: {
        next(state,action){
            var newState = state;
            action.payload.data.rows.forEach((al)=>{
                newState = newState.update('items', value => value.push({key:new Date().getTime(),text:al.name}));
            });
            return newState;
        },
        throw(state,action){
            return state;
        }
    }
},
    initialState
)

// export default function todos(state = initialState, action) {
//   switch (action.type) {
//       case ADD_TODO:
//           return state.update('items', value => value.push({key:new Date().getTime(),text:action.payload.text}));
//     default:
//       return state
//   }
// }
//