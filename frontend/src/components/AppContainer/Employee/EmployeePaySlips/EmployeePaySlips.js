import React from 'react'
import { connect } from 'react-redux'
import Payslip from './Payslip'
import { getRecordsAction } from '../../../../store/actions/getRecordsAction'
import './EmployeePaySlips.scss'

class EmployeePaySlips extends React.Component {

componentDidMount() {
    const token = this.props.tokens.access
    this.props.dispatch(getRecordsAction(token))
}

    render() {
        const records = this.props.records
        return(
            <div className='employee-payslips-wrapper pages-container'>
                <div className='employee-payslips-container'>
                    <div className='employee-payslips-title-box'>
                        <div className='payslips-title-and-logo'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="money-check-alt" class="svg-inline--fa fa-money-check-alt fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M608 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM176 327.88V344c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V152c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07zM416 312c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16zm160 0c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h272c4.42 0 8 3.58 8 8v16z"></path></svg>
                            <h1>Payslips</h1>
                        </div>
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
                        {/* <Payslip /> */}
                        {
                            records && records.map((payslip, index)=>{
                                return <Payslip key={ index } paid={payslip.date_paid} payperiod_start={payslip.payperiod_start}
                                    payperiod_end={payslip.payperiod_end} pdfstorage={payslip.pdfstorage}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        records: state.recordsReducer.records,
        tokens: state.loginReducer.tokens
    }
}

export default connect(mapStateToProps)(EmployeePaySlips)