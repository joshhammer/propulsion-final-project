import {GET_PAYDATES} from "../actionTypes";

export const getPayDatesAction = () => async (dispatch, getState) => {
    const token = localStorage.getItem("access")
    const headers = new Headers({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
    });
    const url = 'https://razzpay.propulsion-learn.ch/api/record/dates-paid/';
    const config = {
        method: "GET",
        headers,
    };
    const response = await fetch(url, config);
    const data = await response.json();
    const action = {
        type: GET_PAYDATES,
        payload: data.reverse()
    };
    dispatch(action)
};