import React, {useEffect, useState} from "react";
import './CompanyTableRow.scss';
import ReportButton from "../ReportButton/ReportButton";
import CardContent from "../CardContent/CardContent";
import {connect} from "react-redux";
import {getSinglePayDateAction} from "../../../../../store/actions/getSinglePayDateAction";

const CompanyTableRow = (props) => {
    const [hidden, setHidden] = useState(true);
    const toggleShow = () => setHidden(!hidden);

    useEffect(() => {
        props.dispatch(getSinglePayDateAction(props.payDate.date_paid))
    }, []);

    return (
        <div className="company-reportrow-container">
            <div className="company-reportrow">
                <div className="company-reportrow-details-more">
                    <ReportButton content={hidden ? "more.." : "less.."} hidden={hidden} toggle={toggleShow}/>
                </div>
                <div className="company-reportrow-details">
                    <div className="company-reportrow-details-field">
                        <p>{props.payDate.date_paid}</p>
                    </div>
                    <div className="company-reportrow-details-field">
                        <p>Regular</p>
                    </div>
                    <div className="company-reportrow-details-field">
                        <p>{props.payDate.payperiod_start}</p>
                    </div>
                    <div className="company-reportrow-details-field">
                        <p>CHF {props.payDate.total_salary_paid}</p>
                    </div>
                </div>
                <div className='company-report-download-box'>
                    {
                        props.payDate && <a href={props.payDate.report.reportfiles} target='_blank'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-down" className="svg-arrow-down svg-inline--fa fa-arrow-circle-down fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"></path></svg>
                        </a>
                    }
                </div>
            </div>
            <div className="company-reportrow-toggle">
                <CardContent isHidden={hidden} payDate={props.payDate.date_paid}/>
            </div>
        </div>
    )
};

const mapStatetoProps = state => {
    return {
        payDateDetails: state.dateReducer.payDateDetails || []
    }
};

export default connect(mapStatetoProps)(CompanyTableRow)

