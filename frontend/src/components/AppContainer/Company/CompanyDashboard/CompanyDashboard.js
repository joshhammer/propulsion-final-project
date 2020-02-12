import React from "react";
import {connect} from "react-redux";
import '../../AppContainer.scss';
import './CompanyDashboard.scss';
import {getUserAction} from '../../../../store/actions/getUserAction'
import {getPayDatesAction} from '../../../../store/actions/getPayDatesAction'

class CompanyDashboard extends React.Component {

    componentDidMount() {
        const token = this.props.tokens.access;
        this.props.dispatch(getUserAction(token));
        this.props.dispatch(getPayDatesAction());
    }

    render() {
        const paydates = this.props.paydates;
        return (
            <div className="company-dashboard-wrapper pages-container">
                <div className='company-dashboard-container'>
                    <div className='company-dashboard-title-box'>
                        <div className='company-dashboard-title-and-logo'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="columns"
                                 class="svg-inline--fa fa-columns fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512">
                                <path fill="currentColor"
                                      d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"></path>
                            </svg>
                            <h1>Dashboard</h1>
                        </div>
                    </div>
                    <div className='company-dashboard-content'>
                        <div className='company-dashboard-welcome-box'>
                            <h1>Good day, {this.props.user.first_name}!</h1>
                            <p>Here's what's been going on lately...</p>
                        </div>
                        <div className='company-dashboard-card-container'>
                            <div className='company-dashboard-card'>
                                <h3>Your latest activities</h3>
                                <ul>
                                    <li>You uploaded Spesenformular.xls</li>
                                    <li>Sara Ober joined your company</li>
                                    <li>You edited your bank account</li>
                                </ul>
                            </div>
                            <div className='dashboard-card'>
                                <h3>Reminders</h3>
                                <ul>
                                    <li>Run Payroll 2020-02</li>
                                    <li>Jorge's Birthday on March 23rd</li>
                                </ul>
                            </div>
                            <div className='dashboard-card'>
                                <h3>Last Payroll Run</h3>
                                <ul>
                                    {paydates.length > 0 &&
                                    <li>Payroll - {paydates[paydates.length - 1].date_paid.slice(0, 7)}</li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        tokens: state.loginReducer.tokens,
        paydates: state.dateReducer.payDates
    }
};

export default connect(mapStateToProps)(CompanyDashboard)