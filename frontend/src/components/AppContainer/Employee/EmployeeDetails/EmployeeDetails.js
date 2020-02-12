import React from 'react';
import { connect } from 'react-redux'
import ProfileData from './ProfileData'
import { updateEmployeeProfile } from '../../../../store/actions/updateEmployeeProfile'
import { getUserAction } from '../../../../store/actions/getUserAction'
import './EmployeeDetails.scss'

class EmployeeDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            readonly: true,
        }
    }

    componentDidMount() {
        const token = this.props.tokens.access
        this.props.dispatch(getUserAction(token))
        // this.props.dispatch(getCompanyAction())
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
        console.log('canceled..')
        this.setState({
            readonly: !this.state.readonly,
        })
    }

    saveAndUpdate = () => {
        this.toggleEdit()
        const token = this.props.tokens.access
        this.props.dispatch(updateEmployeeProfile(this.state, token))
    }

    render() {
        return(
            <div className='pages-container employee-details-wrapper'>
                <div className='employee-details-content'>
                    <div className='employee-profile-header'>
                        <div className='employee-profile-title-box'>
                            <div className='profile-title-and-logo'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="address-card" className="svg-inline--fa fa-address-card fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"></path></svg>                            
                                <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>

                            </div>
                        </div>
                        {this.state.readonly ? 
                            <button className='profile-edit-btn' onClick={this.toggleEdit}>edit</button> :
                            <button className='profile-save-btn' onClick={this.saveAndUpdate}>save</button>
                        }
                        {this.state.readonly ? '' : <button className='profile-cancel-btn' onClick={this.cancelEdit}>cancel</button>}
                        
                    </div>
                    
                    <ProfileData readonly={this.state.readonly} saveData={this.handleChange} inputState={this.state}/>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('User: ', state.userReducer.user)
    return {
        user: state.userReducer.user,
        tokens: state.loginReducer.tokens
    }
}

export default connect(mapStateToProps)(EmployeeDetails)