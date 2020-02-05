import React from "react";
import './TablerowPayroll.scss';

const TableRowPayroll = (props) => {

    let deductions = parseFloat(props.salary - props.net_salary).toFixed(2);
    let subtotal = parseFloat(props.salary + deductions).toFixed(2);

    return (
        <div className="tablerowpayroll-container">
            <div>
                <h3>{props.lastName}, {props.firstName}</h3>
            </div>
            <div>
                <h3>{props.role}</h3>
            </div>
            <div>
                <h3>{props.salary}</h3>
            </div>
            <div>
                <h3>{deductions}</h3>
            </div>
            <div>
                <h3>{subtotal}</h3>
            </div>
        </div>
    )
}

export default TableRowPayroll