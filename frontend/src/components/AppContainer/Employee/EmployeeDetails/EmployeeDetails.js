import React from 'react';
import './EmployeeDetails.scss';

class EmployeeDetails extends React.Component {
    render() {
        return(
            <div className='pages-container employee-details-wrapper'>
                <div className='employee-details-content'>
                    <div className='employee-profile-title-box'>
                        <img src="https://avatars.dicebear.com/v2/male/971d054dc9ab3b60859125adbbd39a3b.svg" 
                            alt="user-avatar" height='50px' width='50px'/>
                        <h1>Chad Johnson</h1>
                    </div>
                    <div className='employee-profile-data-container'>
                        <div className='profile-table-element'>
                            <p>Firstname</p>
                            <input type="text" value='Chad' readonly='true'/>
                        </div>
                        <div className='profile-table-element'>
                            <p>Lastname</p>
                            <input type="text" value='Johnson' readonly='true'/>
                        </div>
                        <div className='profile-table-element'>
                            <p>Phone</p>
                            <input type="text" value='+41 79 523 98 45' readonly='true'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeDetails