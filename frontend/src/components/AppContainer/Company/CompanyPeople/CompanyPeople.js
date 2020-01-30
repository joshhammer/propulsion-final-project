import React from "react";
import '../../AppContainer.scss';
import './CompanyPeople.scss';
import InputField from "../../../reusable-components/input-fields/InputField";
import AuthenticationButton from "../../../reusable-components/buttons/AuthenticationButton";
import TableRow from "../../../reusable-components/TableRow/Tablerow";

const CompanyPeople = () => {
    return (
        <div className="company-people pages-container">
            <div className="company-people-header">
                <div className="company-people-allpeople">
                    <h2>All People</h2>
                </div>
                <div className="company-people-search">
                    <InputField id="search-input" content={"Search..."}/>
                </div>
                <div>
                    <AuthenticationButton content={"Add Employee +"}/>
                </div>
            </div>
            <div className="company-people-table-container">
                <div className="company-people-table-header">
                    <h2>Name</h2>
                    <h2>Role</h2>
                </div>
                <div className="company-people-table-content">
                    <TableRow name={"Alfred Meier"} role={"Scientist"}/>
                    <TableRow name={"Piotr Schawinski"} role={"House Keeping"}/>
                    <TableRow name={"Matt Damon"} role={"Actor"}/>
                    <TableRow name={"Alfred Meier"} role={"Scientist"}/>
                    <TableRow name={"Piotr Schawinski"} role={"House Keeping"}/>
                    <TableRow name={"Matt Damon"} role={"Actor"}/> <TableRow name={"Alfred Meier"} role={"Scientist"}/>
                    <TableRow name={"Piotr Schawinski"} role={"House Keeping"}/>
                    <TableRow name={"Matt Damon"} role={"Actor"}/> <TableRow name={"Alfred Meier"} role={"Scientist"}/>
                    <TableRow name={"Piotr Schawinski"} role={"House Keeping"}/>
                    <TableRow name={"Matt Damon"} role={"Actor"}/>
                </div>
            </div>
        </div>
    )
}

export default CompanyPeople