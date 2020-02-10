import {GET_PAYDATES, GET_SINGLE_PAYDATE} from '../actionTypes';

const initialState = {
    payDates: [],
    payDateDetails: {}
};

export const dateReducer = (state = initialState, action) => {
    if (action.type === GET_PAYDATES) {
        return {
            ...state,
            payDates: action.payload,
        }
    }
    if (action.type === GET_SINGLE_PAYDATE) {
        return {
            ...state,
            payDateDetails: {...state.payDateDetails, [action.key]: action.payload},
        }
    }
    return state
};