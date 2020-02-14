import React from "react";
import { connect } from 'react-redux'
import { getUserAction } from '../../../../store/actions/getUserAction'
import { getRecordsAction } from '../../../../store/actions/getRecordsAction'
import '../../AppContainer.scss';
import './EmployeeDashboard.scss'

class EmployeeDashboard extends React.Component {

    componentDidMount() {
        const token = this.props.tokens.access
        this.props.dispatch(getUserAction(token))
        this.props.dispatch(getRecordsAction(token))
    }

    render() {
        const user = this.props.user
        const records = this.props.records
        return (
            <div className="employee-dashboard-wrapper pages-container">
                <div className='employee-dashboard-container'>
                    <div className='employee-dashboard-title-box'>
                        <div className='employee-dashboard-title-and-logo'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="columns" className="svg-inline--fa fa-columns fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"></path></svg>                            
                            <h1>Dashboard</h1>
                        </div>
                    </div>
                    <div className='employee-dashboard-content'>
                        <div className='dashboard-welcome-box'>
                            <h1>Good day, {user.first_name}!</h1>
                            <p>Here's what's been going on lately..</p>
                        </div>
                        <div className='dashboard-card-container'>
                            <div className='dashboard-card'>
                                <h3>Your latest activities</h3>
                                <ul>
                                    <li>uploaded Spesenabrechnung_mai.xls</li>
                                    <li>edited personal profile</li>
                                    <li>downloaded Ferienantrag.xls</li>
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
                                    {
                                        records.length > 0 && 
                                        <a className='dashboard-payslip-link'>
                                            <li>Lohnabrechnung - {records[0].date_paid.slice(0, 7)}</li>
                                        </a>
                                    }
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
        records: state.recordsReducer.records,
    }
}

export default connect(mapStateToProps)(EmployeeDashboard)