import React from "react";
import './buttons.scss';
import {connect} from "react-redux";

const AuthenticationButton = (props) => {
    return(
        <button className="auth-button" onClick={props.onClick} onSubmit={props.onSubmit}>{props.content}</button>
    )
}

export default connect()(AuthenticationButton)
