import { GET_SINGLE_COMPANY } from '../actionTypes';

export const getCompanyAction = () => async (dispatch, getState) => {
    const token = localStorage.getItem("access");
    const url = 'https://razzpay.propulsion-learn.ch/api/company/';
    const headers = new Headers ({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token,
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
    console.log('data: ', data)
    dispatch(action)
}