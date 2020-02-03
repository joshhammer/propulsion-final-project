import React from 'react';
import {connect} from 'react-redux'
import './CompanyDetails.scss'

class CompanyProfileData extends React.Component {

    componentDidMount() {
        // const userId = this.props.match.params.id
        // this.props.dispatch(getUserAction(userId))
    }

    render() {
        const {inputState, readonly, saveData} = this.props
        const {name, house_number, street, city, country, postal_code, legal_number, poc_name, poc_email, bank_name, iban, bic} = inputState
        const company = this.props.company
        return (
            <div className='company-profile-data-container'>
                <div className='profile-table-element'>
                    <p>Name</p>
                    <input name="name" type="text" value={readonly ? company.name : name} readOnly={readonly}
                           onChange={saveData}
                           id={readonly ? '' : 'editable-input'}/>
                </div>
                <div className='profile-table-element'>
                    <p>Street</p>
                    <input name="street" type="text" value={readonly ? company.street : street} readOnly={readonly}
                           onChange={saveData}
                           id={readonly ? '' : 'editable-input'}/>
                </div>
                <div className='profile-table-element'>
                    <p>House No.</p>
                    <input name='house_number' type="text" value={readonly ? company.house_number : house_number}
                           readOnly={readonly}
                           onChange={saveData}
                           id={readonly ? '' : 'editable-input'}/>
                </div>
                <div className='profile-table-element'>
                    <p>Postal Code</p>
                    <input name='postal_code' type="text" value={readonly ? company.postal_code : postal_code}
                           readOnly={readonly}
                           onChange={saveData}
                           id={readonly ? '' : 'editable-input'}/>
                </div>
                <div className='profile-table-element'>
                    <p>City</p>
                    <input name='city' type="text" value={readonly ? company.city : city} readOnly={readonly}
                           onChange={saveData}
                           id={readonly ? '' : 'editable-input'}/>
                </div>
                <div className='profile-table-element'>
                    <p>Country</p>
                    <input name='country' type="text" value={readonly ? company.country : country} readOnly={readonly}
                           onChange={saveData}
                           id={readonly ? '' : 'editable-input'}/>
                </div>
                <div className='profile-table-element'>
                    <p>Legal Number</p>
                    <input name='legal_number' type="text" value={readonly ? company.legal_number : legal_number}
                           readOnly={readonly}
                           onChange={saveData}
                           id={readonly ? '' : 'editable-input'}/>
                </div>
                <div className='profile-table-element'>
                    <p>Contact Person</p>
                    <input name='poc_name' type="text" value={readonly ? company.poc_name : poc_name}
                           readOnly={readonly}
                           onChange={saveData}
                           id={readonly ? '' : 'editable-input'}/>
                </div>
                <div className='profile-table-element'>
                    <p>Contact Person Email</p>
                    <input name='poc_email' type="text" value={readonly ? company.poc_email : poc_email}
                           readOnly={readonly}
                           onChange={saveData}
                           id={readonly ? '' : 'editable-input'}/>
                </div>
                <div className='profile-table-element'>
                    <p>Bank Name</p>
                    <input name='bank_name' type="text" value={readonly ? company.bank_name : bank_name}
                           readOnly={readonly}
                           onChange={saveData}
                           id={readonly ? '' : 'editable-input'}/>
                </div>
                <div className='profile-table-element'>
                    <p>Bank IBAN</p>
                    <input name='iban' type="text" value={readonly ? company.iban : iban}
                           readOnly={readonly}
                           onChange={saveData}
                           id={readonly ? '' : 'editable-input'}/>
                </div>
                <div className='profile-table-element'>
                    <p>Bank BIC</p>
                    <input name='bic' type="text" value={readonly ? company.bic : bic}
                           readOnly={readonly}
                           onChange={saveData}
                           id={readonly ? '' : 'editable-input'}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('State from CompanyDetails ', state)
    return {
        company: state.companyReducer.company,
    }
}

export default connect(mapStateToProps)(CompanyProfileData)