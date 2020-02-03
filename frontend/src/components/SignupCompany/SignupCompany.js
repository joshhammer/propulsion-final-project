import React from 'react';
import AuthenticationButton from '../reusable-components/buttons/AuthenticationButton';
import InputField from "../reusable-components/input-fields/InputField";
import instagram from '../../assets/svg/instagram.svg';
import facebook from '../../assets/svg/facebook.svg';
import twitter from '../../assets/svg/twitter.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import './SignupCompany.scss';

const SignupCompany = () => {
    return (
        <div className="signuppage-container">
            <div className="signuppage-header">
                {/* <img src={logo} alt="logo"/> */}

                    <h1 id='razzpay-main-title'>Razzpay</h1>

                <h3 id='signup-subtitle'>Fill in the SignUp form to complete the registration <br/> *All fields are mandatory</h3>
            </div>
            <div className="signupauthentication-container ">
                <div className="signupadmin">
                <form className="signupadmin-form">
                        <InputField content={"*Name"} required={true}/>
                        <span className="input-span"></span>
                        
                        <InputField content={"*Last Name"} required={true}/>
                        <span className="input-span"></span>
                        
                        <InputField content={"*Street Address"} required={true}/>
                        <span className="input-span"></span>
                        
                        <InputField content={"*House Number"} required={true}/>
                        <span className="input-span"></span>
                        
                        <InputField content={"*City"} required={true}/>
                        <span className="input-span"></span>
                        
                        <InputField content={"*Postal Code"} required={true}/>
                        <span className="input-span"></span>
                        
                        <InputField content={"*Country"} required={true}/>
                        <span className="input-span"></span>
                        
                        <InputField content={"*AHV Number"} required={true}/>
                        <span className="input-span"></span>
                        
                        <InputField content={"*IBAN Number"} required={true}/>
                        <span className="input-span"></span>
                        
                        <InputField content={"*Position"} required={true}/>
                        <span className="input-span"></span>
                       
                        <InputField content={"*Salary"} required={true}/>
                        <span className="input-span"></span>
                        {/* <AuthenticationButton content={"Sign Up"}/> */}
                       
                    </form>
                </div>
                <div className="signupadminuser">
                    <form>
                        <AuthenticationButton content={"Sign Up"}/>
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
                <div className="footer-spaceholder"></div>
                <div className="footer-right">
                    <img src={instagram} alt="instagram"/>
                    <img src={facebook} alt="facebook"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={linkedin} alt="linkedin"/>
                </div>
            </div>
        </div>
    )
}

export default SignupCompany