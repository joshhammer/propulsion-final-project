import React from "react";
import '../../AppContainer.scss';
import './CompanyDashboard.scss';
import {connect} from "react-redux";

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
                        <ul>
                            <li>Run Payroll for the period from Jan-Feb 20.</li>
                            <li>Info: RazzPay has pushed your employees tax statements to their accounts.</li>
                        </ul>
                    </div>
                    <div className="company-dashboard-bottom-right">
                        <h2>Recent Info</h2>
                        <ul>
                            <li>You've received a new documents of category 'Medical Certificate' in your DocZone.</li>
                            <li>RazzPay has pushed your employees tax statements to their accounts.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('State from CompanyDashboard ', state)
    return {
        user: state.userReducer,
    }
}

export default connect()(CompanyDashboard)