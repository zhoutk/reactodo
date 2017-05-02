import { ADD_TODO } from '../constants/ActionTypes'
import * as __ from 'lodash';

const initialState =
  {
      items:[]
  }


export default function todos(state = initialState, action) {
  switch (action.type) {
      case ADD_TODO:
          let aa = __.cloneDeep(state);
          aa.items.push({key:new Date().getTime(),text:action.text});
      return aa;
    default:
      return state
  }
}
