import React from "react";
import './PayRollSuccess.scss';
import {ReactComponent as Success} from '../../../../../assets/svg/success.svg';
import ReactConfetti from "react-confetti";

const PayRollSuccess = (props) => {
    return (
        <>
            <div className="success-confetti">
                <ReactConfetti/>
            </div>
            <div className="success-container pages-container">
                <Success width={200} height={200}/>
                <p className="success-statement">Your employees will be paid on 18 February 2020.</p>
            </div>
        </>
    )
};

export default PayRollSuccess