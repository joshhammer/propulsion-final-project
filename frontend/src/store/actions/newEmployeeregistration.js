import {CREATE_EMPLOYEE} from "../actionTypes";

export const newEmployeeRegistration = (newEmployee) => async (dispatch, getState) => {
    console.log('new employee argument in action: ', newEmployee);
    const token = localStorage.getItem("access");

    const headers = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token,
    });
    const body = {
        ...newEmployee
    };
    const config = {
        headers: headers,
        body: JSON.stringify(body),
        method: "POST",
    }
    const response = await fetch('https://razzpay.propulsion-learn.ch/api/registration/employee/', config);
    console.log(response.status)
    return response.status;
}