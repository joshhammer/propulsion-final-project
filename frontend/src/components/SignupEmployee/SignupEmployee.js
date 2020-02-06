import React from 'react';
import { connect } from 'react-redux';
import AuthenticationButton from '../reusable-components/buttons/AuthenticationButton';
// import InputField from "../reusable-components/input-fields/InputField";
import { submitNewEmployeeData } from '../../store/actions/submitNewEmployeeData';
// import instagram from '../../assets/svg/instagram.svg';
// import facebook from '../../assets/svg/facebook.svg';
// import twitter from '../../assets/svg/twitter.svg';
// import linkedin from '../../assets/svg/linkedin.svg';
import './SignupEmployee.scss';
import '../LandingPage/LandingPage.scss'

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
        console.log('click Submit Data..')
        this.props.dispatch(submitNewEmployeeData(this.state))
    }

    render() {
        return (
            <div className="signuppage-container">
                <div className="signup-authentication-container">
                        <div className='employee-signup-title-box'>
                            <h1>Welcome to Razzpay</h1>
                            <h3>please fill in the form to complete the registration <br />all *fields are mandatory</h3>

                        </div>
                    <div className="signup-employee">

                        <form className="signup-employee-form">
                            {/* <input name={'ahv'} placeholder={"*AHV Number"} onChange={this.handleChange} required={true} /> */}
                            <input name={'first_name'} placeholder={"*Firstname"} onChange={this.handleChange} required={true} />
                            <input name={'last'} placeholder={"*Lastname"} onChange={this.handleChange} required={true} />
                            <input name={'email'} placeholder={"*Email"} onChange={this.handleChange} required={true} />
                            <input name={'username'} placeholder={"*Username"} onChange={this.handleChange} required={true} />
                            
                            {/* <input name={'street'} placeholder={"*Street"} onChange={this.handleChange} required={true} />
                            
                            <input name={'house_number'} placeholder={"*House Number"} onChange={this.handleChange} required={true} />
                            
                            <input name={'city'} placeholder={"*City"} onChange={this.handleChange} required={true} />
                            
                            <input name={'postal_code'} placeholder={"*Postal Code"} onChange={this.handleChange} required={true} /> */}

                            {/* <input name={'bank_name'} placeholder={"*Bank Name"} onChange={this.handleChange} required={true} />
                            
                            <input name={'iban'} placeholder={"*IBAN"} onChange={this.handleChange} required={true} /> */}
                            
                            <input name={'code'} placeholder={"*Registration Code"} onChange={this.handleChange} required={true} />

                            <input name={'password'} placeholder={"*Password"} onChange={this.handleChange} required={true} />
                            <input name={'password_repeat'} placeholder={"*Repeat Password"} onChange={this.handleChange} required={true} />
                            
                        </form>

                    </div>
                    
                    <button className='employee-validate-submitBtn'>Submit</button>
                </div>
            </div>
        )
    }
}


export default connect()(SignupEmployee)