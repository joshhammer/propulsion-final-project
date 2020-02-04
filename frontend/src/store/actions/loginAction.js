export const loginAction = (email, password) => async (dispatch, getState) => {
    const headers = new Headers({
        "content-type": "application/json",
    });

    const body = {
        "email": email,
        "password": password,
    }

    const config = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    };

    const response = await fetch('https://razzpay.propulsion-learn.ch/api/auth/token/', config);
    const data = await response.json();
    console.log('logging in: ', data)
    const action = {
        type: 'LOGIN_USER',
        payload: data,
    };
    dispatch(action)
}