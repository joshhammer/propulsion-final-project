import React from 'react'
import SingleDocument from './SingleDocument'
import './EmployeeDocuments.scss'

class EmployeeDocuments extends React.Component {
    render() {
        return(
            <div className='pages-container employee-documents-wrapper'>
                <div className='employee-documents-content'>
                    <div className='employee-documents-title-box'>
                        <div className='employee-documents-title-and-logo'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-alt" class="svg-inline--fa fa-file-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg>
                            <h1>Documents</h1>
                        </div>
                    </div>
                    <div className='employee-documents-divider'>
                        <div className='employee-documents-left-section'>
                            <h3>Company Documents</h3>
                            <SingleDocument />
                            <SingleDocument />
                            <SingleDocument />
                            <SingleDocument />
                            <SingleDocument />
                            <SingleDocument />
                            <SingleDocument />
                        </div>
                        <div className='employee-documents-right-section'>
                            <h3>Your Documents</h3>
                            <SingleDocument />
                            <SingleDocument />
                            <SingleDocument />
                            <SingleDocument />
                            <SingleDocument />
                            <SingleDocument />
                            <SingleDocument />
                            <SingleDocument />
                            <SingleDocument />
                            <SingleDocument />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeDocuments