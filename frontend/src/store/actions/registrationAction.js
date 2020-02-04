export const registrationAction = (email) => async (dispatch, getState) => {
    console.log('in da action: ', email)
    const headers = new Headers({
        "content-type": "application/json",
    });
    const body = {
        "email": email,
    };
    const config = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    };
    const response = await fetch('https://razzpay.propulsion-learn.ch/api/registration/', config);
    const data = await response.json();
    return data;
}