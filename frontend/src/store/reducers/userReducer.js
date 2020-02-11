import {CREATE_EMPLOYEE, GET_ALL_USERS, GET_SINGLE_USER, UPDATE_EMPLOYEE_PROFILE, SUBMIT_NEW_EMPLOYEE} from '../actionTypes';

const initialState = {
    user: {}
};

export const userReducer = (state=initialState, action) => {
    if(action.type === GET_SINGLE_USER){
        return {
            ...state,
            user: action.payload,
        }
    }
    if (action.type === GET_ALL_USERS){
        return {
            ...state,
            users: action.payload,
        }
    }

    if (action.type === CREATE_EMPLOYEE){
        return {
            ...state,
            newEmployee: action.payload,
        }
    }
    if (action.type === UPDATE_EMPLOYEE_PROFILE) {
        return {
            ...state,
            user: action.payload
        }
    }
    if (action.type === SUBMIT_NEW_EMPLOYEE) {
        return {
            ...state,
            user: action.payload
        }
    }
    return state
}