import React from "react";
import './InputField.scss';
import {connect} from "react-redux";

const InputField = (props) => {
    return (
        <input className="auth-inputfield" placeholder={props.content} name={props.name} type={props.type} onChange={props.onChange} value={props.value}></input>
    )
}

export default connect()(InputField)