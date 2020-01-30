import React from 'react';
import './EmployeeDetails.scss'

class ProfileData extends React.Component {
    render() {
        console.log(this.props.readonly)
        return(
            <div className='employee-profile-data-container'>
                <div className='profile-table-element'>
                    <p>Firstname</p>
                    <input type="text" readOnly={this.props.readonly} 
                    id={this.props.readonly ? '' : 'editable-input'}/>
                </div>
                <div className='profile-table-element'>
                    <p>Lastname</p>
                    <input type="text" value='Johnson' readOnly={this.props.readonly}
                    id={this.props.readonly ? '' : 'editable-input'}/>
                </div>
                <div className='profile-table-element'>
                    <p>AHV Number</p>
                    <input type="text" value='13.45679.13' readOnly={this.props.readonly} 
                    id={this.props.readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>Phone</p>
                    <input type="text" value='+41 79 523 98 45' readOnly={this.props.readonly} 
                    id={this.props.readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>Email</p>
                    <input type="text" value='chad@johnson.com' readOnly={this.props.readonly} 
                    id={this.props.readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>Street</p>
                    <input type="text" value='Minervastr. 25' readOnly={this.props.readonly} 
                    id={this.props.readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>Postal Code</p>
                    <input type="text" value='8008' readOnly={this.props.readonly} 
                    id={this.props.readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>City</p>
                    <input type="text" value='Zürich' readOnly={this.props.readonly} 
                    id={this.props.readonly ? '' : 'editable-input'} />
                </div>
            </div>
        )
    }
}

export default ProfileData