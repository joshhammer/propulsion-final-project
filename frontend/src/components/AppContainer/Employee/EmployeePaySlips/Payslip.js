import React from 'react'
import arrow from '../../../../assets/arrow-circle-down-solid.svg'

class Payslip extends React.Component {
    render() {
        return(
            <div className='single-payslip-element'>
                <div className='payslip-helper-div'>
                    <p>Pay Period</p>
                </div>
                <div className='payslip-helper-div'>
                    <p>Date Paid</p>
                </div>
                <div className='payslip-helper-div'>
                    <a href="#">
                        <img src={arrow} alt="arrow" width='20px' height='20px'/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Payslip