import React, {useEffect, useState} from "react";
import './CompanyRunPayroll.scss';
import TableRowPayroll from "./TablerowPayroll/TablerowPayroll";
import AuthenticationButton from "../../../reusable-components/buttons/AuthenticationButton";
import {connect} from "react-redux";
import {getAllUsersAction} from "../../../../store/actions/getAllUsersAction";
import PayRollConfirm from "./PayRollConfirm/PayRollConfirm";
import {postPayrollAction} from "../../../../store/actions/postPayroll";

const CompanyRunPayroll = (props) => {
    useEffect(() => {
        props.dispatch(getAllUsersAction())
    }, []);

    const [isOpen, setisOpen] = useState(false);

    const toggleOpen = () => {
        setisOpen(isOpen => !isOpen)
    };

    const handleSubmit = async () => {
        const response = await props.dispatch(postPayrollAction(props.users));
        if (response.status === 200) {
            props.history.push('payroll/success');
        }
    };

    let total = 0;

    return (
        <div className="payroll-container pages-container">
            {isOpen &&
            <div className={"company-payroll-modal-content"}>
                <PayRollConfirm isOpen={toggleOpen} amount={total} onClick={handleSubmit}/>
            </div>}
            <div className="payroll-header">
                <h1>Payroll period February-March 2020</h1>
                <h3>due on 25 March 2020</h3>
            </div>
            <div className="payroll-table-header">
                <h2>Name</h2>
                <h2 id="table-role">Role</h2>
                <h2>Salary</h2>
                <h2>Deductions</h2>
                <h2>Subtotal</h2>
            </div>
            <div className="payroll-table">
                <div className="payroll-table-container">
                    {
                        props.users &&
                        props.users.map((user, i) => {
                            total += user.salary.gross_month + (user.salary.gross_month - user.salary.net);
                            return < TableRowPayroll
                                key={i}
                                firstName={user.first_name}
                                lastName={user.last_name}
                                role={user.salary.position}
                                salary={user.salary.gross_month}
                                net_salary={user.salary.net}
                            />
                        })
                    }
                </div>
            </div>
            <div className="payroll-confirm"><h3>Please review the payments above & confirm.</h3></div>
            <div className="payroll-footer">
                <div className="run-payroll">
                    <AuthenticationButton content={"Run Payroll"} onClick={toggleOpen}/>
                </div>
                <h2>Total: CHF {total.toFixed(2)}</h2>
            </div>
        </div>
    )
};

const mapStatetoProps = state => {
    return {
        users: state.userReducer.users
    }
}

export default connect(mapStatetoProps)(CompanyRunPayroll)