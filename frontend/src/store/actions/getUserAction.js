import { GET_SINGLE_USER } from '../actionTypes';

export const getUserAction = (id) => async (dispatch, getState) => {
    const url = `https://razzpay.propulsion-learn.ch/api/employee/${id}`
    const headers = new Headers ({
        'Content-Type': 'application/json'
    })
    const config = {
        method: 'GET',
        headers
    }
    const response = await fetch(url, config)
    const data = await response.json()
    const action = {
        type: GET_SINGLE_USER,
        payload: data
    }
    dispatch(action)
}