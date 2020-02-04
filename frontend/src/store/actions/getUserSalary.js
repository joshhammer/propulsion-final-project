import { GET_USER_SALARY } from '../actionTypes';

export const getUserSalary = (token) => async (dispatch, getState) => {
    const url = `https://razzpay.propulsion-learn.ch/api/salary/`
    const headers = new Headers({
        Authorization: `Bearer ${token}`
    })
    const config = {
        method: 'GET',
        headers
    }
    const response = await fetch(url, config)
    const data = await response.json()
    const action = {
        type: GET_USER_SALARY,
        payload: data
    }
    dispatch(action)
}