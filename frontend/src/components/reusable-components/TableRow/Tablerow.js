import React from "react";
import './TableRow.scss';

const TableRow = (props) => {
    return (
        <div className="tablerow-container">
            <div className="tablerow-name">
                <h3>{props.name}</h3>
            </div>
            <div className="tablerow-role">
                <h3>{props.role}</h3>
            </div>
        </div>
    )
}

export default TableRow