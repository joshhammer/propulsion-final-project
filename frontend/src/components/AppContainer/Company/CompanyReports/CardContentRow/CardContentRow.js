import React from "react";
import './CardContentRow.scss';

const CardContentRow = (props) => {
    return (
        <div className="cardcontentrow-container">
            <div className="cardcontentrow-element">
                <h4>{props.payment.user.first_name}, {props.payment.user.last_name}</h4>
            </div>
            <div className="cardcontentrow-element">
                <h4>Regular Salary</h4>
            </div>
            <div className="cardcontentrow-element">
                <h4>{props.payment.user.salary.position}</h4>
            </div>
            <div className="cardcontentrow-element">
                <h4>CHF {props.payment.user.salary.gross_month}</h4>
            </div>
        </div>
    )
};

export default CardContentRow