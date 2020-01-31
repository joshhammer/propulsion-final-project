import React from 'react';
import { connect } from 'react-redux'
import './EmployeeDetails.scss'

class ProfileData extends React.Component {

    componentDidMount(){
        // const userId = this.props.match.params.id
        // this.props.dispatch(getUserAction(userId))
    }

    render() {
        const {inputState, readonly, saveData} = this.props
        const {firstname, lastname, phone, ahv, email, street, city, postal_code, house_number, bank_name, 
            iban, bic} = inputState
        const user = this.props.user
        return(
            <div className='employee-profile-data-container'>
                <h3 className='profile-data-section-title'>Personal Information</h3>
                <div className='profile-table-element'>
                    <p>Firstname</p>
                    <input name="firstname" type="text" value={readonly ? user.first_name : firstname} readOnly={readonly} 
                        onChange={saveData}
                        id={readonly ? '' : 'editable-input'}/>
                </div>
                <div className='profile-table-element'>
                    <p>Lastname</p>
                    <input name="lastname" type="text" value={readonly ? user.last_name : lastname} readOnly={readonly}
                        onChange={saveData}
                        id={readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>AHV Number</p>
                    <input name='ahv' type="text" value={readonly ? user.ahv : ahv} readOnly={readonly} 
                        onChange={saveData}
                        id={readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>Phone</p>
                    <input name='phone' type="text" value={readonly ? user.phone : phone} readOnly={readonly}
                        onChange={saveData} 
                        id={readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>Email</p>
                    <input name='email' type="text" value={readonly ? user.email : email} readOnly={readonly} 
                        onChange={saveData} 
                        id={readonly ? '' : 'editable-input'} />
                </div>

                <h3 className='profile-data-section-title'>Address</h3>

                <div className='profile-table-element'>
                    <p>Street</p>
                    <input name='street' type="text" value={readonly ? user.street : street} readOnly={readonly} 
                        onChange={saveData}
                        id={readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>House Number</p>
                    <input name='house_number' type="text" value={readonly ? user.house_number : house_number} readOnly={readonly}
                        onChange={saveData}
                        id={readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>Postal Code</p>
                    <input name='postal_code' type="text" value={readonly ? user.postal_code : postal_code} readOnly={readonly}
                        onChange={saveData} 
                        id={readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>City</p>
                    <input name='city' type="text" value={readonly ? user.city : city} readOnly={readonly}
                        onChange={saveData} 
                        id={readonly ? '' : 'editable-input'} />
                </div>

                <h3 className='profile-data-section-title'>Bank Account</h3>

                <div className='profile-table-element'>
                    <p>Bank Name</p>
                    <input name='bank_name' type="text" value={readonly ? user.bank_name : bank_name} readOnly={readonly}
                        onChange={saveData}
                        id={readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>IBAN</p>
                    <input name='iban' type="text" value={readonly ? user.iban : iban} readOnly={readonly}
                        onChange={saveData}
                        id={readonly ? '' : 'editable-input'} />
                </div>
                <div className='profile-table-element'>
                    <p>BIC</p>
                    <input name='bic' type="text" value={readonly ? user.bic : bic} readOnly={readonly}
                        onChange={saveData}
                        id={readonly ? '' : 'editable-input'} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('State from EmployeeDetails ', state)
    return {
        user: state.userReducer.user,
    }
}

export default connect(mapStateToProps)(ProfileData)