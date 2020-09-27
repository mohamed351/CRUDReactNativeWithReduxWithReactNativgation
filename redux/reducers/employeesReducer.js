import {ACTION_TYPES } from '../actions/employeesActions';
const intialState = {
    list: []
}
export const employeesReducer = (state = intialState, action) =>{
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list:[...action.payload]
            }
        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list:[...state.list,action.payload]
            }
        default:
          return state
    }
}

