import { SUBMIT_NEW_EMPLOYEE } from '../actionTypes'

export const submitNewEmployeeData = (employeeData) => async (dispatch, GetState) => {
    const url = 'https://razzpay.propulsion-learn.ch/api/registration/validate/'
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    const body = {
        ...employeeData
    }
    console.log(body)
    const config = {
        method: 'PATCH',
        headers,
        body: JSON.stringify(body)
    }
    console.log('CONFIG: ', config)
    const response = await fetch(url, config)
    console.log(response.status)
    const action = {
        type: SUBMIT_NEW_EMPLOYEE,
        payload: body,
    }
    dispatch(action)
}