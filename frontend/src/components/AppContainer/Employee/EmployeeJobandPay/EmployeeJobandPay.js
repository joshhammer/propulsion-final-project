import React from 'react'
import './EmployeeJobAndPay.scss'

class JobAndPay extends React.Component {
    render() {
        return(
            <div className='pages-container job-page-wrapper'>
                <div className='employee-job-content'>
                    <div className='employee-job-title-box'>
                        <div className='job-title-and-logo'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" class="svg-inline--fa fa-briefcase fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>
                            <h1>Job & Pay</h1>
                        </div>
                    </div>
                <div className='employee-job-details-container'>

                        <h3 className='profile-data-section-title'>Basic Information</h3>

                        <div className='job-details-box'>
                            <div className='job-table-element'>
                                <p>Job Title</p>
                                <input name="" type="text" value='Chief of HTML to PDF'/>
                            </div>
                            <div className='job-table-element'>
                                <p>Pensum</p>
                                <input name="" type="text" value='80%'/>
                            </div>
                            <div className='job-table-element'>
                                <p>Salary</p>
                                <input name="" type="text" value='$7999.50'/>
                            </div>
                        </div>

                        <h3 className='profile-data-section-title'>Company Contact</h3>

                        <div className='job-details-box'>
                            <div className='job-table-element'>
                                <p>Full Name</p>
                                <input name="" type="text" value='Patricia Kadlubowski'/>
                            </div>
                            <div className='job-table-element'>
                                <p>Email</p>
                                <input name="" type="text" value='patricia.kadlubowski@razzpay.com'/>
                            </div>
                            <div className='job-table-element'>
                                <p>Phone</p>
                                <input name="" type="text" value='033 355 65 21'/>
                            </div>
                        </div>

                        <h3 className='profile-data-section-title'>Company Address</h3>

                        <div className='job-table-element'>
                            <p>Street</p>
                            <input name="" type="text" value='Jupiterstrasse' />
                        </div>
                        <div className='job-table-element'>
                            <p>House Number</p>
                            <input name="" type="text" value='23' />
                        </div>
                        <div className='job-table-element'>
                            <p>Postal Code</p>
                            <input name="" type="text" value='3003' />
                        </div>
                        <div className='job-table-element'>
                            <p>City</p>
                            <input name="" type="text" value='Bern' />
                        </div>
                </div>

                </div>
            </div>
        )
    }
}

export default JobAndPay