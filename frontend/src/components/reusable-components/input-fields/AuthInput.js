import React from "react";
import './AuthInput.scss';

const AuthInput = (props) => {
    return (
        <input className="auth-inputfield" placeholder={props.content}></input>
    )
}

export default AuthInput