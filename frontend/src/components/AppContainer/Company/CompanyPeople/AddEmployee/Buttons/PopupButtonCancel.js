import React from "react";
import './PopupButton.scss';
import {connect} from "react-redux";

const PopupButtonCancel = (props) => {
    return(
        <button className="popup-button-cancel" onClick={props.onClick} onSubmit={props.onSubmit}>{props.content}</button>
    )
}

export default connect()(PopupButtonCancel)
