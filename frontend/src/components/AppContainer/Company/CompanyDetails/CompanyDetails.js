import React from 'react';
import { connect } from 'react-redux'
import CompanyProfileData from './CompanyProfileData';

class CompanyDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            readonly: true,
        }
    }

    handleChange = (event) => {
        console.log('changing...')
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
        console.log('canceled..')
        this.setState({
            readonly: !this.state.readonly,
        })
    }

    saveAndUpdate = () => {
        this.toggleEdit()
        console.log('DoSomethingElse')
    }

    render() {
        return(
            <div className='pages-container company-details-wrapper'>
                <div className='company-details-content'>
                    <div className='company-profile-title-box'>
                        <img src=""
                            alt="" height='50px' width='50px'/>
                        <h1>ABC Company AG</h1>
                        {this.state.readonly ?
                            <button className='profile-edit-btn' onClick={this.toggleEdit}>edit</button> :
                            <button className='profile-save-btn' onClick={this.saveAndUpdate}>save</button>
                        }
                        {this.state.readonly ? '' : <button className='profile-cancel-btn' onClick={this.cancelEdit}>cancel</button>}

                    </div>
                    <CompanyProfileData readonly={this.state.readonly} saveData={this.handleChange} inputState={this.state}/>
                </div>
            </div>
        )
    }
}

export default connect()(CompanyDetails)