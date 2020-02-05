import React from 'react';
import { connect } from 'react-redux';
import AuthenticationButton from '../reusable-components/buttons/AuthenticationButton';
import InputField from "../reusable-components/input-fields/InputField";
import { submitNewEmployeeData } from '../../store/actions/submitNewEmployeeData';
import instagram from '../../assets/svg/instagram.svg';
import facebook from '../../assets/svg/facebook.svg';
import twitter from '../../assets/svg/twitter.svg';
import linkedin from '../../assets/svg/linkedin.svg';
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

    submitData = () => {
        this.props.dispatch(submitNewEmployeeData(this.state))
    }

    render() {
        return (
            <div className="signuppage-container">
                <div className="signup-header">
                    <h1 id='razzpay-main-title'>Razzpay</h1>
                    <h3 id='signup-subtitle'>Fill in the SignUp form to complete the registration <br />*All fields are mandatory</h3>
                </div>
                <div className="signup-authentication-container">
                    <div className="signup-employee">

                        <form className="signup-employee-form">

                            <InputField name={'ahv'} content={"*AHV Number"} onChange={this.handleChange} required={true} />
                            <span className="input-span"></span>

                            <InputField name={'street'} content={"*Street"} onChange={this.handleChange} required={true} />
                            <span className="input-span"></span>

                            <InputField name={'house_number'} content={"*House Number"} onChange={this.handleChange} required={true} />
                            <span className="input-span"></span>

                            <InputField name={'city'} content={"*City"} onChange={this.handleChange} required={true} />
                            <span className="input-span"></span>

                        </form>

                        <form className="signup-employee-form">
                            <InputField name={'postal_code'} content={"*Postal Code"} onChange={this.handleChange} required={true} />
                            <span className="input-span"></span>

                            <InputField name={'bank_name'} content={"*Bank Name"} onChange={this.handleChange} required={true} />
                            <span className="input-span"></span>

                            <InputField name={'iban'} content={"*IBAN"} onChange={this.handleChange} required={true} />
                            <span className="input-span"></span>

                            <InputField name={'code'} content={"*Registration Code"} onChange={this.handleChange} required={true} />
                            <span className="input-span"></span>

                        </form>

                    </div>

                    <div className="employee-submitBtn-box">
                        <form>
                            <AuthenticationButton content={"Submit"} onClick={this.submitData}/>
                        </form>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-left">
                        <p>About</p>
                        <p>Services</p>
                        <p>Pricing</p>
                        <p>Jobs</p>
                    </div>
                    <div className="footer-right">
                        <img src={instagram} alt="instagram" />
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                </div>
            </div>
        )
    }
}


export default connect()(SignupEmployee)