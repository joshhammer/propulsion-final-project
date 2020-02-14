import { GET_EMPLOYEE_RECORDS } from "../actionTypes"

export const getRecordsAction = (token) => async (dispatch, getState) => {
    const url = `https://razzpay.propulsion-learn.ch/api/employee/records/`
    const headers = new Headers({
        'Authorization': `Bearer ${token}`
    })
    const config = {
        method: 'GET',
        headers,
    }
    const response = await fetch(url, config)
    const data = await response.json()
    const action = {
        type: GET_EMPLOYEE_RECORDS,
        payload: data.reverse()
    }
    dispatch(action)
}