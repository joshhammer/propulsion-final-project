import {GET_SINGLE_COMPANY} from '../actionTypes';

const initialState = {
    company: {}
}

export const companyReducer = (state=initialState, action) => {
    if (action.type === GET_SINGLE_COMPANY) {
        return {
            ...state,
            company: action.payload,
        }
    }
    return state
}