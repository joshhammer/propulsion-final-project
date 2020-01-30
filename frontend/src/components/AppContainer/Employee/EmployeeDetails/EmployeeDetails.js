import React from 'react';
import { connect } from 'react-redux'
import ProfileData from './ProfileData'
import './EmployeeDetails.scss';

class EmployeeDetails extends React.Component {
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
            <div className='pages-container employee-details-wrapper'>
                <div className='employee-details-content'>
                    <div className='employee-profile-title-box'>
                        <img src="" 
                            alt="" height='50px' width='50px'/>
                        <h1>Chad Johnson</h1>
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

// const mapStateToProps = (state) => {
//     console.log('State from EmployeeDetails ', state)
//     return {
//         user: state.userReducer,
//     }
// }

export default connect()(EmployeeDetails)