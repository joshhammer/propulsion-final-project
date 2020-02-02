import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import logo from '../../../../assets/logo_blue-white.png';
import './EmployeeSidebar.scss';
import '../../AppContainer.scss';

const EmployeeSidebar = (props) => {
    const path = props.history.location.pathname
    return (
        <div className="employee-sidebar-container">
            <div className="company-logo">
                {/* <img src={logo} alt="logo" /> */}
                <div className='logo-circle'>
                    <h1 className='company-logo-title'>R</h1> 
                </div>
            </div>
            <div className="employee-sidebar-link-container">
                <Link className="sidebar-link" to="/employee/dashboard" id={path === '/employee/dashboard' ? 'active-sidebar-link' : ''}>Dashboard</Link>
                <Link className="sidebar-link" to="/employee/payslips" id={path === '/employee/payslips' ? 'active-sidebar-link' : ''}>Payslips</Link>
                <Link className="sidebar-link" to="/employee/details" id={path === '/employee/details' ? 'active-sidebar-link' : ''}>Profile</Link>
                <Link className="sidebar-link" to="/employee/job" id={path === '/employee/job' ? 'active-sidebar-link' : ''}>Job & Pay</Link>
                <Link className="sidebar-link" to="/employee/documents" id={path === '/employee/documents' ? 'active-sidebar-link' : ''}>Documents</Link>
            </div>
            {/* <div className="sidebar-placeholder"></div> */}
        </div>
    )
}

export default connect()(withRouter(EmployeeSidebar));