import React from "react";
import { Route } from "react-router-dom";
import EmployeeSidebar from './EmployeeSidebar/EmployeeSidebar';
import EmployeeDashboard from './EmployeeDashboard/EmployeeDashboards';
import EmployeeDetails from './EmployeeDetails/EmployeeDetails';
import EmployeePaySlips from "./EmployeePaySlips/EmployeePaySlips";
import JobAndPay from "./EmployeeJobandPay/EmployeeJobandPay";
import './Employee.scss';

const Employee = (props) => {
    return (
        <>
            <div className="employee-container">
                <EmployeeSidebar />
                <Route exact={true} path="/employee/dashboard" component={EmployeeDashboard} />
                <Route exact={true} path="/employee/details" component={EmployeeDetails} />
                <Route exact={true} path="/employee/payslips" component={EmployeePaySlips} />
                <Route exact={true} path="/employee/job" component={JobAndPay} />
            </div>
        </>
    )
}

export default Employee