import React from "react";
import './buttons.scss';

const AuthenticationButton = (props) => {
    return(
        <button className="auth-button" onSubmit={props.onSubmit}>{props.content}</button>
    )
}

export default AuthenticationButton