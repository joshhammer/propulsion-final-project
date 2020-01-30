export const dropzoneAction = (files) => async(dispatch, getState)
{
    console.log(files)
    const token = getState().loginReducer.tokens.access;
    const headers = new Headers({
        "content-type": "application/json",
        "Authorization": "Bearer " + token
    });

    const body = {
        "files": files,
    }

    const config = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    }
}