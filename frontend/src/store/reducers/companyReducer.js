import {GET_SINGLE_COMPANY} from '../actionTypes';

const initialState = {
    company: {
        name: 'ABC Company AG',
        street: 'Grove Street',
        house_number: '666',
        postal_code: 8000,
        city: 'Zürich',
        country: 'Switzerland',
        legal_number: 'CHE-123.456.789',
        poc_name: 'HR PERSON',
        poc_email: 'hr@abc.ch',
        bank_name: 'ZKB',
        iban: 'CH41 3456 7890 3456',
        bic: 'ZKBCCEKJDZ'
    }
}

export const companyReducer = (state = initialState, action) => {
    if (action.type === GET_SINGLE_COMPANY) {
        return {
            ...state,
            company: action.payload,
        }
    }
    return state
}