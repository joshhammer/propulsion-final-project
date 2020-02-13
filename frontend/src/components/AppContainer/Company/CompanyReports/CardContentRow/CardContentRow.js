import React from "react";
import './CardContentRow.scss';

const CardContentRow = (props) => {
    return (
        <div className="cardcontentrow-container">
            <div className="cardcontentrow-element">
                <p>{props.payment.user.first_name}, {props.payment.user.last_name}</p>
            </div>
            <div className="cardcontentrow-element">
                <p>Regular Salary</p>
            </div>
            <div className="cardcontentrow-element">
                <p>{props.payment.user.salary.position}</p>
            </div>
            <div className="cardcontentrow-element">
                <p>CHF {props.payment.user.salary.gross_month}</p>
            </div>
        </div>
    )
};

export default CardContentRow