import React from "react";
import { Route, Switch } from "react-router-dom";
import EmployeeSidebar from './EmployeeSidebar/EmployeeSidebar';
import EmployeeDashboard from './EmployeeDashboard/EmployeeDashboards';
import './Employee.scss';

const Employee = (props) => {
    return (
        <>
            <div className="employee-container">
                <EmployeeSidebar />
                <Route exact={true} path="/employee/dashboard" component={EmployeeDashboard} />
            </div>
        </>
    )
}

export default Employee