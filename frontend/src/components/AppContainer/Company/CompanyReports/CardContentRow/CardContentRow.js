import React from "react";
import './CardContentRow.scss';

const CardContentRow = (props) => {
    return (
        <div className="cardcontentrow-container">
            <div className="cardcontentrow-name">
                <h3>{props.name}</h3>
            </div>
            <div className="cardcontentrow-role">
                <h3>{props.role}</h3>
            </div>
            <div className="cardcontentrow-salary">
                <h3>CHF {props.gross_month}</h3>
            </div>
        </div>
    )
}

export default CardContentRow