import React from "react";
import {Route} from "react-router-dom";
import CompanySidebar from "./CompanySidebar/CompanySidebar";
import CompanyDashboard from "./CompanyDashboard/CompanyDashboard";
import './Company.scss';
import CompanyPeople from "./CompanyPeople/CompanyPeople";
import CompanyRunPayroll from "./CompanyRunPayroll/CompanyRunPayroll";
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import CompanyDocuments from "./CompanyDocuments/CompanyDocuments";
import CompanyReports from "./CompanyReports/CompanyReports";
import PayRollSuccess from "./CompanyRunPayroll/PayRollSuccess/PayRollSuccess";


const Company = (props) => {
    return (
        <>
            <div className="company-container">
                <CompanySidebar/>
                <Route exact={true} path="/company/dashboard" component={CompanyDashboard}/>
                <Route exact={true} path="/company/people" component={CompanyPeople}/>
                <Route exact={true} path="/company/payroll" component={CompanyRunPayroll}/>
                <Route exact={true} path="/company/details" component={CompanyDetails}/>
                <Route exact={true} path="/company/documents" component={CompanyDocuments}/>
                <Route exact={true} path="/company/reports" component={CompanyReports}/>
                <Route exact={true} path="/company/payroll/success" component={PayRollSuccess}/>
            </div>
        </>
    )
};

export default Company
