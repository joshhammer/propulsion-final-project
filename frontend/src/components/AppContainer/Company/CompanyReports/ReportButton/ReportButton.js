import React from "react";
import './ReportButton.scss';
import { ReactComponent as InfoPlus} from '../../../../../assets/svg/folder-plus.svg';
import { ReactComponent as InfoMinus} from '../../../../../assets/svg/folder-minus.svg';

const ReportButton = (props) => {
    return (
        <div className="toggle-button">
            <button onClick={props.toggle} className="report-button">
                {
                    props.hidden ? (<div className="button-div"><InfoPlus width={25} height={25}/><p>{props.content}</p></div>) : (<div className="button-div"><InfoMinus width={25} height={25}/><p>{props.content}</p></div>)
                }
            </button>
        </div>
    )
};

export default ReportButton
