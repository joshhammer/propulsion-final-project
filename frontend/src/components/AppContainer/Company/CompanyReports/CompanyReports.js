import React, {useEffect} from "react";
import './CompanyReports.scss';
import CompanyTableRow from "./CompanyTableRow/CompanyTableRow";
import {getPayDatesAction} from "../../../../store/actions/getPayDatesAction";
import ReactLoading from 'react-loading';
import {connect} from "react-redux";

const CompanyReports = (props) => {

    useEffect(() => {
        props.dispatch(getPayDatesAction())
    }, []);

    return (
        <div className="company-reports pages-container">
            <div className="company-reports-title">
                <h1>Reports</h1>
            </div>
            <div className="company-reports-table-container">
                <div className="company-reports-table-title">
                    <h2>Summaries</h2>
                </div>
                <div className="company-reports-table-header">
                    <h3>Pay Date</h3>
                    <h3>Type</h3>
                    <h3>Description</h3>
                    <h3>Debit</h3>
                </div>
                <div className="company-reports-table-content">
                    {
                        !props.payDates.length > 0 ? (
                            <ReactLoading type={"spin"}/>
                        ) : (<div className="company-reports-table-content-2">
                            {props.payDates.map((payDate, i) => {
                                return <CompanyTableRow payDate={payDate} key={i}/>
                            })}</div>
                        )
                    }
                </div>
            </div>
        </div>
    )
};

const mapStatetoProps = state => {
    return {
        payDates: state.dateReducer.payDates
    }
};

export default connect(mapStatetoProps)(CompanyReports)