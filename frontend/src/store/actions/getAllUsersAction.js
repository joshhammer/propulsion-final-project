import {GET_ALL_USERS} from '../actionTypes';

export const getAllUsersAction = (id) => async (dispatch, getState) => {
    const token = localStorage.getItem("access");
    const url = 'https://razzpay.propulsion-learn.ch/api/employee/all/'
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    });
    const config = {
        method: 'GET',
        headers
    };
    const response = await fetch(url, config)
    const data = await response.json()
    const action = {
        type: GET_ALL_USERS,
        payload: data
    }
    console.log('in da user action: ', action)

    dispatch(action)
}