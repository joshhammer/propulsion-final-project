import React from "react";
import './CardContentRow.scss';

const CardContentRow = (props) => {
    return (
        <div className="cardcontentrow-container">
            <div className="cardcontentrow-name">
                <h3>{props.payment.user.first_name}, {props.payment.user.last_name}</h3>
            </div>
            <div className="cardcontentrow-role">
                <h3>{props.payment.user.salary.position}</h3>
            </div>
            <div className="cardcontentrow-salary">
                <h3>CHF {props.payment.user.salary.gross_month}</h3>
            </div>
        </div>
    )
};

export default CardContentRow