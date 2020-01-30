import React from 'react';
import './EmployeeDetails.scss'

class ProfileData extends React.Component {
    render() {
        return(
            <div className='employee-profile-data-container'>
                <div className='profile-table-element'>
                    <p>Firstname</p>
                    <input type="text" value='Chad' readonly='true' />
                </div>
                <div className='profile-table-element'>
                    <p>Lastname</p>
                    <input type="text" value='Johnson' readonly='true' />
                </div>
                <div className='profile-table-element'>
                    <p>AHV Number</p>
                    <input type="text" value='13.45679.13' readonly='true' />
                </div>
                <div className='profile-table-element'>
                    <p>Phone</p>
                    <input type="text" value='+41 79 523 98 45' readonly='true' />
                </div>
                <div className='profile-table-element'>
                    <p>Email</p>
                    <input type="text" value='chad@johnson.com' readonly='true' />
                </div>
                <div className='profile-table-element'>
                    <p>Street</p>
                    <input type="text" value='Minervastr. 25' readonly='true' />
                </div>
                <div className='profile-table-element'>
                    <p>Postal Code</p>
                    <input type="text" value='8008' readonly='true' />
                </div>
                <div className='profile-table-element'>
                    <p>City</p>
                    <input type="text" value='Zürich' readonly='true' />
                </div>
            </div>
        )
    }
}

export default ProfileData