import { UPDATE_EMPLOYEE_PROFILE } from '../actionTypes'

export const updateEmployeeProfile = (updatedData, token) => async (dispatch, getState) => {
    const url = 'https://razzpay.propulsion-learn.ch/api/employee/'
    const header = new Headers ({
        'Content-Type': 'application.json',
        'Authorization': `Bearer ${token}`,
    })
    const body = {
        ...updatedData
    }
    const config = {
        method: 'PATCH',
        header,
        body: JSON.stringify(body)
    }
    const response = await fetch(url, config)
    const data = await response.json()
    const action = {
        type: UPDATE_EMPLOYEE_PROFILE,
        payload: body
    }
    dispatch(action)
}