import { GET_USER_SALARY} from '../actionTypes';

const initialState = {
    salary: {}
}

export const salaryReducer = (state = initialState, action) => {
    if (action.type === GET_USER_SALARY) {
        return {
            ...state,
            salary: action.payload,
        }
    }
    return state
}