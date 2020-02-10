import React from "react";
import './TableRow.scss';

const TableRow = (props) => {
    return (
        <div className="tablerow-container">
            <div className="tablerow-container-element">
                <p>{props.lastName}, {props.firstName}</p>
            </div>
            <div className="tablerow-container-element">
                <p>{props.position}</p>
            </div>
            <div className="tablerow-container-element">
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default TableRow