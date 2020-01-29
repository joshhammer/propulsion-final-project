import React from "react";
import logo from '../../../../assets/logo_blue-white.png';
import { Link } from "react-router-dom";
import './EmployeeSidebar.scss';

const EmployeeSidebar = () => {
    return (
        <div className="employee-sidebar-container">
            <div className="company-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="employee-sidebar-link-container">
                <Link className="sidebar-link" to="/employee/dashboard">Dashboard</Link>
                <Link className="sidebar-link" to="/employee/payslips">Payslips</Link>
                <Link className="sidebar-link" to="/employee/profile">Profile</Link>
                <Link className="sidebar-link" to="/employee/job">Job & Pay</Link>
                <Link className="sidebar-link" to="/employee/documents">Documents</Link>
            </div>
            <div className="sidebar-placeholder"></div>
        </div>
    )
}

export default EmployeeSidebar;