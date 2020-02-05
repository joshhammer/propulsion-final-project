export const getSinglePayDateAction = (date) => async (dispatch, getState) => {
    const token = localStorage.getItem("access");
    console.log('date: ', date)
    const url = `https://razzpay.propulsion-learn.ch/api/record/list/?search=${date}`;
    console.log('url: ', url)

    const headers = new Headers({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
    });
    const config = {
        headers: headers,
        method: "GET"
    };
    const response = await fetch(url, config);
    const data = await response.json;
    const action = {
        type: "GET_SINGLE_PAYDATE",
        payload: data
    };
    dispatch(action)
};