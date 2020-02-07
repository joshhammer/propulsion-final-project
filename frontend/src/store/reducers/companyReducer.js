import {GET_SINGLE_COMPANY, PATCH_COMPANY} from '../actionTypes';

const initialState = {
    company: {
        name: '',
        house_number: '',
        street: '',
        city: '',
        country: '',
        postal_code: '',
        legal_number: '',
        poc_name: '',
        poc_email: '',
        bank_name: '',
        iban: '',
        bic: '',
    }
};

export const companyReducer = (state = initialState, action) => {
    if (action.type === GET_SINGLE_COMPANY) {
        return {
            ...state,
            company: action.payload,
        }
    }

    if (action.type === PATCH_COMPANY) {
        return {
            ...state,
            company: action.payload,
        }
    }
    return state
};