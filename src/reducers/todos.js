import { ADD_TODO } from '../constants/ActionTypes'
import {Map, List} from 'immutable';

let initialState = Map({
        items: List([])
    });


export default function todos(state = initialState, action) {
  switch (action.type) {
      case ADD_TODO:
          return state.update('items', value => value.push({key:new Date().getTime(),text:action.text}));
    default:
      return state
  }
}
