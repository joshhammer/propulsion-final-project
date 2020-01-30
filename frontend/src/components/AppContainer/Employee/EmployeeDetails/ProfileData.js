import React from 'react';
import './EmployeeDetails.scss'

class ProfileData extends React.Component {

    componentDidMount(){

    }

    render() {
        const {inputState, readonly, saveData} = this.props
        const {firstname, lastname, } = inputState
        return(
            <div className='employee-profile-data-container'>
                <div className='profile-table-element'>
                    <p>Firstname</p>
                    <input name="firstname" type="text" value={readonly ? 'FetchedData' : firstname} readOnly={readonly} 
                    onChange={saveData}
                    id={readonly ? '' : 'editable-input'}/>
                </div>
                <div className='profile-table-element'>
                    <p>Lastname</p>
                    <input name="lastname" type="text" value={readonly ? 'FetchedData' : lastname} readOnly={readonly}
                        onChange={saveData}
                        id={readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>AHV Number</p>
                    <input type="text" value='13.45679.13' readOnly={readonly} 
                    id={readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>Phone</p>
                    <input type="text" value='+41 79 523 98 45' readOnly={readonly} 
                    id={readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>Email</p>
                    <input type="text" value='chad@johnson.com' readOnly={readonly} 
                    id={readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>Street</p>
                    <input type="text" value='Minervastr. 25' readOnly={readonly} 
                    id={readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>Postal Code</p>
                    <input type="text" value='8008' readOnly={readonly} 
                    id={readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>City</p>
                    <input type="text" value='Zürich' readOnly={readonly} 
                    id={readonly ? '' : 'editable-input'} />
                </div>
            </div>
        )
    }
}

export default ProfileData