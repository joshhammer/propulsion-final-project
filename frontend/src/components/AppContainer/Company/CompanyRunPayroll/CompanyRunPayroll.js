import React, {useEffect} from "react";
import './CompanyRunPayroll.scss';
import TableRowPayroll from "./TablerowPayroll/TablerowPayroll";
import AuthenticationButton from "../../../reusable-components/buttons/AuthenticationButton";
import {connect} from "react-redux";
import {getAllUsersAction} from "../../../../store/actions/getAllUsersAction";

const CompanyRunPayroll = (props) => {
    useEffect(() => {
        props.dispatch(getAllUsersAction())
    }, []);

    let total = 0;

    return (
        <div className="payroll-container pages-container">
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
            <div className="payroll-footer">
                <div className="run-payroll">
                    <AuthenticationButton content={"Run Payroll"}/>
                </div>
                <h2>Total: CHF {total}</h2>
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