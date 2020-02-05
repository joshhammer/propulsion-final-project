import { SUBMIT_NEW_EMPLOYEE } from '../actionTypes'

export const submitNewEmployeeData = (employeeData) => async (dispatch, GetState) => {
    const url = 'https://razzpay.propulsion-learn.ch/api/registration/validate/'
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    const body = employeeData
    const config = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    }
    const response = await fetch(url, config)
    console.log(response.status)
    const action = {
        type: SUBMIT_NEW_EMPLOYEE,
    }
    dispatch(action)
}