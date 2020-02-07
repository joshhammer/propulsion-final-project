import React from "react";
import './buttons.scss';
import {connect} from "react-redux";

const LogoutButton = (props) => {
    return(
        <button className="logout-button" onClick={props.onClick}>Logout</button>
    )
};

export default connect()(LogoutButton)