import React from 'react';
import './EmployeeDetails.scss';
import ProfileData from './ProfileData'

class EmployeeDetails extends React.Component {
    render() {
        return(
            <div className='pages-container employee-details-wrapper'>
                <div className='employee-details-content'>
                    <div className='employee-profile-title-box'>
                        <img src="" 
                            alt="" height='50px' width='50px'/>
                        <h1>Chad Johnson</h1>
                    </div>
                    
                    <ProfileData />

                </div>
            </div>
        )
    }
}

export default EmployeeDetails