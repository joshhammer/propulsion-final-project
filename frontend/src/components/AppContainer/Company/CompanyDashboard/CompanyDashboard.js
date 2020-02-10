import React from "react";
import '../../AppContainer.scss';
import './CompanyDashboard.scss';
import {connect} from "react-redux";

const CompanyDashboard = (props) => {
    return (
        <div className="company-dashboard-wrapper pages-container">
            <div className='company-dashboard-container'>
                <div className='company-dashboard-title-box'>
                    <div className='company-dashboard-title-and-logo'>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="columns" class="svg-inline--fa fa-columns fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"></path></svg>
                        <h1>Dashboard</h1>
                    </div>
                </div>
                <div className='company-dashboard-content'>
                    <div className='company-dashboard-welcome-box'>
                        <h1>Good day, ...!</h1>
                        <p>Here's what's been going on lately..</p>
                    </div>
                    <div className='company-dashboard-card-container'>
                        <div className='company-dashboard-card'>
                            <h3>Your latest activities</h3>
                            <ul>
                                <li>upload document</li>
                                <li>edited user data</li>
                                <li>payslip download</li>
                            </ul>
                        </div>
                        <div className='dashboard-card'>
                            <h3>Latest company documents</h3>
                            <ul>
                                <li>Spesenabrechnung_Neu.xls</li>
                                <li>Kinderzulagen.doc</li>
                                <li>Ferienantrag.xls</li>
                                <li>Selbsteinschätzung.doc</li>
                            </ul>
                        </div>
                        <div className='dashboard-card'>
                            <h3>Current payslip</h3>
                            <ul>
                                <li>Lohnabrechnung_2020_01.pdf</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()(CompanyDashboard)