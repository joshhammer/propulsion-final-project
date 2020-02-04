import {PATCH_COMPANY} from "../actionTypes";

export const patchCompanyAction = (new_state) => async (dispatch, getState) => {
    const token = localStorage.getItem("access");
    const url = 'https://razzpay.propulsion-learn.ch/api/company/';
    const headers = new Headers({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token,
    })
    const body = {
        ...new_state
    };
    const config = {
        method: 'PATCH',
        headers,
        body: JSON.stringify(body),
    }
    console.log('CONFIG', config)
    const response = await fetch(url, config)
    const data = await response.json()
    const action = {
        type: PATCH_COMPANY,
        payload: data
    }
    dispatch(action)
    console.log('data: ', data)
}