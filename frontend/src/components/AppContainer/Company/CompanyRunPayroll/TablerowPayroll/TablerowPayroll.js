import React from "react";
import './TablerowPayroll.scss';

const TableRowPayroll = (props) => {

    let salary = Number(props.salary).toFixed(2);
    let net_salary = Number(props.net_salary).toFixed(2);
    let deductions = Number(salary - net_salary).toFixed(2);
    let subtotal = Number(salary) + Number(deductions);

    return (
        <div className="tablerowpayroll-container">
            <div>
                <h3>{props.lastName}, {props.firstName}</h3>
            </div>
            <div>
                <h3>{props.role}</h3>
            </div>
            <div>
                <h3>CHF {salary}</h3>
            </div>
            <div>
                <h3>CHF {deductions}</h3>
            </div>
            <div>
                <h3>CHF {subtotal}</h3>
            </div>
        </div>
    )
}

export default TableRowPayroll