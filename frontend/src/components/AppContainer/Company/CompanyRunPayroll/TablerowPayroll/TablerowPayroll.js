import React from "react";
import './TablerowPayroll.scss';

const TableRowPayroll = (props) => {

    const deductions = props.salary - props.net_salary;
    const subtotal = props.salary + deductions;

    return (
        <div className="tablerowpayroll-container">
            <div>
                <h3>{props.firstName} {props.lastName}</h3>
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