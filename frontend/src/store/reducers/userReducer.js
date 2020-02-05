import {CREATE_EMPLOYEE, GET_ALL_USERS, GET_SINGLE_USER, UPDATE_EMPLOYEE_PROFILE} from '../actionTypes';

const initialState = {
    user: {
        first_name: 'Chad',
        last_name: 'Johnson',
        email: 'chad@johnson.com',
        ahv: '13.3568748.12',
        phone: '0791234567',
        street: 'Minervastr.',
        house_number: '777',
        city: 'Zürich',
        postal_code: '8001'
    }
}

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
    return state
}