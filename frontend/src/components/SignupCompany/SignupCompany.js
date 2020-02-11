import React from 'react';
import { connect } from 'react-redux';
import './SignupCompany.scss';
import '../LandingPage/LandingPage.scss'
import { submitNewEmployeeData } from '../../store/actions/submitNewEmployeeData';

class SignupEmployee extends React.Component {

    constructor(props) {
        super(props)

        this.state = {}
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    submitData = (e) => {
        e.preventDefault();
        this.props.dispatch(submitNewEmployeeData(this.state))
        this.props.history.push('/signupsuccess')
    }

    render() {
        return (
            <div className="signuppage-container">
                <div className="signup-authentication-container">
                    <div className='company-signup-title-box'>
                        <h1>Welcome to Razzpay</h1>
                        <h3>Thank you for registering!</h3>
                        <h3>Please check your inbox and enter the registration code <br />and your personal details below</h3>
                        <h3>*all fields are mandatory</h3>

                    </div>
                    <div className="signup-company">

                        <form className="signup-company-form">
                            <input name={'first_name'} placeholder={"*Firstname"} onChange={this.handleChange} required={true} />
                            <input name={'last_name'} placeholder={"*Lastname"} onChange={this.handleChange} required={true} />
                            <input name={'email'} placeholder={"*Email"} onChange={this.handleChange} required={true} />
                            <input name={'username'} placeholder={"*Username"} onChange={this.handleChange} required={true} />

                            <input name={'code'} placeholder={"*Registration Code"} onChange={this.handleChange} required={true} />

                            <input name={'password'} type='password' placeholder={"*Password"} onChange={this.handleChange} required={true} />
                            <input name={'password_repeat'} type='password' placeholder={"*Repeat Password"} onChange={this.handleChange} required={true} />

                        </form>

                    </div>

                    <button className='employee-validate-submitBtn' onClick={this.submitData}>Submit</button>
                </div>
            </div>
        )
    }
}


export default connect()(SignupEmployee)