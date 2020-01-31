import { GET_SINGLE_COMPANY } from '../actionTypes';

export const getCompanyAction = (id) => async (dispatch, getState) => {
    const url = `https://razzpay.propulsion-learn.ch/api/company/${id}`
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
        type: GET_SINGLE_COMPANY,
        payload: data
    }
    dispatch(action)
}