import React from 'react';
import AuthenticationButton from '../reusable-components/buttons/AuthenticationButton';
import InputField from "../reusable-components/input-fields/InputField";
import logo from '../../assets/logo_blue-white.png';
import instagram from '../../assets/svg/instagram.svg';
import facebook from '../../assets/svg/facebook.svg';
import twitter from '../../assets/svg/twitter.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div className="landingpage-container">
            <div className="landingpage-header">
                {/* <img src={logo} alt="logo"/> */}

                    <h1 id='razzpay-main-title'>Razzpay</h1>

                <h3 id='main-subtitle'>Introducing the people platform for small businesses. <br/>
                    One place to run payroll, manage benefits, <br/> and support your team.</h3>
            </div>
            <div className="authentication-container">
                <div className="register">
                    <form className="register-form">
                        <InputField content={"Email"}/>
                        <span className="input-span"></span>
                        <AuthenticationButton content={"Register"}/>
                    </form>
                </div>
                <div className="login">
                    <form>
                        <InputField content={"Email"}/>
                        <span className="input-span"></span>
                        <InputField content={"Password"} type={"password"}/>
                        <span className="input-span"></span>
                        <AuthenticationButton content={"Login"}/>
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

export default LandingPage