import React from 'react';
import {Link} from "react-router-dom";
import './LandingPage.scss';
import AuthenticationButton from '../reusable-components/buttons/AuthenticationButton';
import InputField from "../reusable-components/input-fields/InputField";
import logo from '../../assets/logo_blue-white.png';

const LandingPage = () => {
    return (
        <div className="landingpage-container">
            <div className="landingpage-header">
                <img src={logo} alt="logo"/>
                <h3>Manage your payroll easily</h3>
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
                        <InputField content={"Password"}/>
                        <span className="input-span"></span>
                        <AuthenticationButton content={"Login"}/>
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="footer-left">
                    <Link>About</Link>
                    <Link>Services</Link>
                    <Link>Pricing</Link>
                    <Link>Jobs</Link>
                </div>
                <div className="footer-spaceholder"></div>
                <div className="footer-right">
                    <p>Icon1</p>
                    <p>Icon1</p>
                    <p>Icon1</p>
                    <p>Icon1</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage