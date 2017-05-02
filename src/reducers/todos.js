import { ADD_TODO } from '../constants/ActionTypes'
import * as __ from 'lodash';

const initialState =
  {
      items:[]
  };


export default function todos(state = initialState, action) {
  switch (action.type) {
      case ADD_TODO:
          let newState = __.cloneDeep(state);
          newState.items.push({key:new Date().getTime(),text:action.text});
          return newState;
    default:
      return state
  }
}
