import React from "react";
import '../../AppContainer.scss';
import './CompanyDashboard.scss';

const CompanyDashboard = (props) => {
    return (
        <div className="company-dashboard pages-container">
            <div className="company-dashboard-content">
                <div className="company-dashboard-user">
                    <h1>Hello, Admin</h1>
                </div>
                <div className="company-dashboard-bottom">
                    <div className="company-dashboard-bottom-left">
                        <h2>Todo's</h2>
                    </div>
                    <div className="company-dashboard-bottom-right">
                        <h2>Reminders</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyDashboard