import React from "react";
import {Route, Switch} from "react-router-dom";
import CompanySidebar from "./CompanySidebar/CompanySidebar";
import CompanyDashboard from "./CompanyDashboard/CompanyDashboard";
import './Company.scss';
import CompanyPeople from "./CompanyPeople/CompanyPeople";


const Company = (props) => {
    return (
        <>
            <div className="company-container">
                <CompanySidebar/>
                <Route exact={true} path="/company/dashboard" component={CompanyDashboard}/>
                <Route exact={true} path="/company/people" component={CompanyPeople}/>
            </div>
        </>
    )
}

export default Company