import React from 'react'
import Payslip from './Payslip'
import './EmployeePaySlips.scss'

class EmployeePaySlips extends React.Component {
    render() {
        return(
            <div className='employee-payslips-wrapper pages-container'>
                <div className='employee-payslips-container'>
                    <div className='employee-payslips-title-box'>
                        <h1>Payslips</h1>
                    </div>
                    <div className='employee-payslips-content'>
                        <div className='single-payslip-element' id='payslip-table-head'>
                            <div className='payslip-helper-div'>
                                <h3>Pay Period</h3>
                            </div>
                            <div className='payslip-helper-div'>
                                <h3>Date Paid</h3>
                            </div>
                            <div className='payslip-helper-div'>
                                <h3>Download</h3>
                            </div>
                        </div>
                        <Payslip />
                        <Payslip />
                        <Payslip />
                        <Payslip />
                        <Payslip />
                        <Payslip />
                        <Payslip />
                        <Payslip />
                        <Payslip />
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeePaySlips