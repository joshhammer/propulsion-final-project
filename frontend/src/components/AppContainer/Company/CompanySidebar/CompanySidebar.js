import React from "react";
import {Link, withRouter} from "react-router-dom";
import './CompanySidebar.scss';
import '../../AppContainer.scss';
import LogoutButton from "../../../reusable-components/buttons/LogoutButton";
import {connect} from "react-redux";

const CompanySidebar = (props) => {

    const handleClick = () => {
        localStorage.clear();
        props.history.push('/');
        window.location.reload();
    };

    const path = props.history.location.pathname
    return (
        <div className="company-sidebar-container">
            <div className="company-logo">
                {/* <img src={logo} alt="logo"/> */}
                <div className='logo-circle'>
                    <h1 className='company-logo-title'>R</h1>
                </div>
            </div>
            <div className="company-sidebar-links">
                <Link className="sidebar-link" to="/company/dashboard"
                    id={path === '/company/dashboard' ? 'active-sidebar-link' : ''}>Dashboard</Link>
                <Link className="sidebar-link" to="/company/people"
                    id={path === '/company/people' ? 'active-sidebar-link' : ''}>Employees</Link>
                <Link className="sidebar-link" to="/company/payroll"
                    id={path === '/company/payroll' ? 'active-sidebar-link' : ''}>Run Payroll</Link>
                <Link className="sidebar-link" to="/company/details"
                    id={path === '/company/details' ? 'active-sidebar-link' : ''}>Company Info</Link>
                <Link className="sidebar-link" to="/company/documents"
                    id={path === '/company/documents' ? 'active-sidebar-link' : ''}>Documents</Link>
                <Link className="sidebar-link" to="/company/reports"
                    id={path === '/company/reports' ? 'active-sidebar-link' : ''}>Reports</Link>
                <LogoutButton onClick={handleClick}/>
            </div>
        </div>
    )
}

export default withRouter(connect()(CompanySidebar));
