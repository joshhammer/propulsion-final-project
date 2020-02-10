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
                <p>{props.lastName}, {props.firstName}</p>
            </div>
            <div>
                <p>{props.role}</p>
            </div>
            <div>
                <p>CHF {salary}</p>
            </div>
            <div>
                <p>CHF {deductions}</p>
            </div>
            <div>
                <p>CHF {subtotal}</p>
            </div>
        </div>
    )
}

export default TableRowPayroll