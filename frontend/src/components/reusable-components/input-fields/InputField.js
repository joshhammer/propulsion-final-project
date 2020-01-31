import React from "react";
import './InputField.scss';

const InputField = (props) => {
    return (
        <input className="auth-inputfield" placeholder={props.content} type={props.type}></input>
    )
}

export default InputField