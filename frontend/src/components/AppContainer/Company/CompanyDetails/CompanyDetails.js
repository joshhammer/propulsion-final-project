import React from 'react';
import { connect } from 'react-redux'
import CompanyProfileData from './CompanyProfileData';
import {patchCompanyAction} from "../../../../store/actions/patchCompanyAction";

class CompanyDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            readonly: true,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    toggleEdit = (event) => {
        this.setState({
            readonly: !this.state.readonly,
        })
    }

    cancelEdit = () => {
        this.setState({
            readonly: !this.state.readonly,
        })
    }

    saveAndUpdate = () => {
        this.toggleEdit()
        this.props.dispatch(patchCompanyAction(this.state))
    }

    render() {
        return(
            <div className='pages-container company-details-wrapper'>
                <div className='company-details-content'>
                    <div className='company-profile-title-box'>
                        <img src=""
                            alt="" height='50px' width='50px'/>
                        <h1>Your company profile.</h1>
                        {this.state.readonly ?
                            <button className='profile-edit-btn' onClick={this.toggleEdit}>Edit</button> :
                            <button className='profile-save-btn' onClick={this.saveAndUpdate}>Save</button>
                        }
                        {this.state.readonly ? '' : <button className='profile-cancel-btn' onClick={this.cancelEdit}>Cancel</button>}
                    </div>
                    <CompanyProfileData readonly={this.state.readonly} saveData={this.handleChange} inputState={this.state}/>
                </div>
            </div>
        )
    }
}

export default connect()(CompanyDetails)