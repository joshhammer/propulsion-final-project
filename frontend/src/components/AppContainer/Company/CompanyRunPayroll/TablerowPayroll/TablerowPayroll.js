import React from "react";
import './TablerowPayroll.scss';

const TableRowPayroll = (props) => {

    let salary = Number(props.salary).toFixed(2);
    let net_salary = Number(props.net_salary).toFixed(2);
    let deductions = Number(salary - net_salary).toFixed(2);
    let subtotal = Number(salary) + Number(deductions);

    return (
        <div className="tablerowpayroll-container">
            <div className="tablerowpayroll-element-small payroll-name-field">
                <p>{props.lastName}, {props.firstName.slice(0,1)}.</p>
            </div>
            <div className="tablerowpayroll-element-small">
                <p>{props.role}</p>
            </div>
            <div className="tablerowpayroll-element-small">
                <p>CHF {salary}</p>
            </div>
            <div className="tablerowpayroll-element-wide">
                <p>CHF {deductions}</p>
            </div>
            <div className="tablerowpayroll-element-wide">
                <p>CHF {subtotal}</p>
            </div>
        </div>
    )
}

export default TableRowPayroll