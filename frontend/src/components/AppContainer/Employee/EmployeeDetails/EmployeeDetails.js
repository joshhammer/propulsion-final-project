import React from 'react';
import './EmployeeDetails.scss';
import ProfileData from './ProfileData'

class EmployeeDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            readonly: true,
        }
    }

    toggleEdit = (event) => {
        this.setState({
            readonly: !this.state.readonly,
        })
        console.log(this.state.readonly)
    }

    render() {
        return(
            <div className='pages-container employee-details-wrapper'>
                <div className='employee-details-content'>
                    <div className='employee-profile-title-box'>
                        <img src="" 
                            alt="" height='50px' width='50px'/>
                        <h1>Chad Johnson</h1>
                        {this.state.readonly ? 
                            <button className='profile-edit-btn' onClick={this.toggleEdit}>edit</button> :
                            <button className='profile-save-btn' onClick={this.toggleEdit}>save</button> 
                            }
                        
                    </div>
                    
                    <ProfileData readonly={this.state.readonly}/>

                </div>
            </div>
        )
    }
}

export default EmployeeDetails