import React from "react";
import './TablerowPayroll.scss';

const TableRowPayroll = (props) => {
    return (
        <div className="tablerowpayroll-container">
            <div>
                <h3>{props.name}</h3>
            </div>
            <div>
                <h3>{props.role}</h3>
            </div>
            <div>
                <h3>{props.salary}</h3>
            </div>
            <div>
                <h3>{props.pension}</h3>
            </div>
            <div>
                <h3>{props.subtotal}</h3>
            </div>
        </div>
    )
}

export default TableRowPayroll