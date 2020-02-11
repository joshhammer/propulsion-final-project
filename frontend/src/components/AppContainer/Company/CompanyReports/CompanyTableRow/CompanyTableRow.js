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

