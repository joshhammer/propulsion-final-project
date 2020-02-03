import React from "react";
import './CompanyRunPayroll.scss';
import TableRowPayroll from "./TablerowPayroll/TablerowPayroll";
import AuthenticationButton from "../../../reusable-components/buttons/AuthenticationButton";

const CompanyRunPayroll = () => {
    return (
        <div className="payroll-container pages-container">
            <div className="payroll-header">
                <h1>Payroll period February-March 2020</h1>
                <h3>due on 25 March 2020</h3>
            </div>
            <div className="payroll-table-header">
                <h2>Name</h2>
                <h2 id="table-role">Role</h2>
                <h2>Salary</h2>
                <h2>Pension</h2>
                <h2>Subtotal</h2>
            </div>
            <div className="payroll-table">
                <TableRowPayroll name={"Matt Damon"} role={"Actor"} salary={6000} pension={400} subtotal={6400}/>
                <TableRowPayroll name={"RazzPay"} role={"Full-Stuck"} salary={3000} pension={200} subtotal={3200}/>
                <TableRowPayroll name={"Alfred Meier"} role={"Scientist"} salary={5000} pension={350} subtotal={5350}/>
                <TableRowPayroll name={"Piotr Schawinski"} role={"House Keeping"} salary={7000} pension={450}
                                 subtotal={7450}/>
                <TableRowPayroll name={"Matt Damon"} role={"Actor"} salary={6000} pension={400} subtotal={6400}/>
                <TableRowPayroll name={"David"} role={"Pupil"} salary={6000} pension={400} subtotal={6400}/>
                <TableRowPayroll name={"Peter Meier"} role={"Assistant to Assistant"} salary={4000} pension={250}
                                 subtotal={4250}/>
            </div>
            <div className="payroll-footer">
                <div className="run-payroll">
                    <AuthenticationButton content={"Run Payroll"}/>
                </div>
                <h2>Total: CHF 32'000</h2>
            </div>
        </div>
    )
};

export default CompanyRunPayroll