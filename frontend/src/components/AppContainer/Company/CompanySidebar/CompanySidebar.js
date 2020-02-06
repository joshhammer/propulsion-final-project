import React from "react";
import {Link, withRouter} from "react-router-dom";
import './CompanySidebar.scss';
import '../../AppContainer.scss';
import LogoutButton from "../../../reusable-components/buttons/LogoutButton";
import {connect} from "react-redux";

const CompanySidebar = (props) => {

    const handleClick = () => {
        localStorage.clear();
        props.history.push('/')
    };

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
                <LogoutButton onClick={handleClick}/>
            </div>
        </div>
    )
}

export default withRouter(connect()(CompanySidebar));