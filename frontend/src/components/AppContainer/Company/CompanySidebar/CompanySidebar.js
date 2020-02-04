import React from "react";
import {Link} from "react-router-dom";
import './CompanySidebar.scss';
import '../../AppContainer.scss';

const CompanySidebar = () => {
    return (
        <div className="company-sidebar-container">
            <div className="company-logo">
                {/* <img src={logo} alt="logo"/> */}
                <div className='logo-circle'>
                    <h1 className='company-logo-title'>R</h1>
                </div>
            </div>
            <div className="company-sidebar-links">
                <Link className="sidebar-link" to="/company/dashboard">Dashboard</Link>
                <Link className="sidebar-link" to="/company/people">People</Link>
                <Link className="sidebar-link" to="/company/payroll">Run Payroll</Link>
                <Link className="sidebar-link" to="/company/details">Company Info</Link>
                <Link className="sidebar-link" to="/company/documents">Documents</Link>
                <Link className="sidebar-link" to="/company/reports">Reports</Link>
            </div>
            {/* <div className="sidebar-placeholder"></div> */}
        </div>
    )
}

export default CompanySidebar;