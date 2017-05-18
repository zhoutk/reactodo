import * as types from '../constants/ActionTypes'
import {createAction} from 'redux-actions';
import ajax from 'axios';

export const addTodo = createAction(types.ADD_TODO);
export const queryTodo = (val) => async (dispatch, getState)=>{
    let value = await ajax.get('http://nzsh.lifeonway.com/rs/users');
    dispatch({
        type:types.QUERY_TODO,
        payload:value
    });
};
