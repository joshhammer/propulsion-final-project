import React from "react";
import logo from '../../../../assets/logo_blue-white.png';
import {Link} from "react-router-dom";
import './CompanySidebar.scss';
import '../../AppContainer.scss';

const CompanySidebar = () => {
    return (
        <div className="company-sidebar-container">
            <div className="company-logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="company-sidebar-links">
                <Link className="sidebar-link" to="/company/dashboard">Dashboard</Link>
                <Link className="sidebar-link" to="/company/people">People</Link>
                <Link className="sidebar-link" to="/company/payroll">Run Payroll</Link>
                <Link className="sidebar-link" to="/company/documents">Documents</Link>
                <Link className="sidebar-link" to="/company/records">Records</Link>
            </div>
            <div className="sidebar-placeholder"></div>
        </div>
    )
}

export default CompanySidebar;