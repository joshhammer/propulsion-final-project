import React from "react";
import './PopupButton.scss';
import {connect} from "react-redux";

const PopupButtonConfirm = (props) => {
    return(
        <button className="popup-button-confirm" onClick={props.onClick} onSubmit={props.onSubmit}>{props.content}</button>
    )
};

export default connect()(PopupButtonConfirm)
