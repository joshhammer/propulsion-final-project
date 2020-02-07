import React from "react";
import './ReportButton.scss';
import { ReactComponent as Info} from '../../../../../assets/svg/folder-plus.svg';

const ReportButton = (props) => {
    return (
        <div className="toggle-button">
            <button onClick={props.toggle} className="report-button">
                <Info width={25} height={25}/>
                <p>{props.content}</p>
            </button>
        </div>
    )
};

export default ReportButton
