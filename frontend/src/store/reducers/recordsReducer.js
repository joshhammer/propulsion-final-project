import { GET_EMPLOYEE_RECORDS } from '../actionTypes'

const initialState = {
    records: []
}

export const recordsReducer = (state=initialState, action) => {
    if(action.type === GET_EMPLOYEE_RECORDS){
        return {
            ...state,
            records: action.payload
        }
    }
    return state
}