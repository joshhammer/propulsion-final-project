import React, {useState} from "react";
import './ReportButton.scss';
import info from '../../../../../assets/svg/info.svg'

const ReportButton = (props) => {
    return (
        <div className="toggle-button">
            <button onClick={props.toggle} className="report-button">
                <img src={info} alt="info"/>
                <p>{props.content}</p>
            </button>
        </div>
    )
}

export default ReportButton
