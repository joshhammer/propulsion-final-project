import React from "react";
import './CompanyReports.scss';
import CompanyTableRow from "./CompanyReportRow/CompanyReportTable";

const CompanyReports = () => {
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
                    <CompanyTableRow/>
                    <CompanyTableRow/>
                    <CompanyTableRow/>
                    <CompanyTableRow/>
                    <CompanyTableRow/>
                    <CompanyTableRow/>
                    <CompanyTableRow/>
                    <CompanyTableRow/>
                </div>
            </div>
        </div>
    )
};

export default CompanyReports