import React from "react";
import './InputField.scss';

const InputField = (props) => {
    return (
        <input className="auth-inputfield" placeholder={props.content}></input>
    )
}

export default InputField