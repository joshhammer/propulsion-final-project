import React, {useState} from 'react';
import AuthenticationButton from '../reusable-components/buttons/AuthenticationButton';
import InputField from "../reusable-components/input-fields/InputField";
import instagram from '../../assets/svg/instagram.svg';
import facebook from '../../assets/svg/facebook.svg';
import twitter from '../../assets/svg/twitter.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import './LandingPage.scss';
import {connect} from "react-redux";
import {loginAction} from "../../store/actions/loginAction";
import {registrationAction} from "../../store/actions/registrationAction";

const LandingPage = (props) => {
    const [state, setState] = useState({
        registrationEmail: "",
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        console.log(e.target.value)
        setState({...state, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.registrationEmail) {
            props.dispatch(registrationAction(state.registrationEmail))
        }
        if (state.email && state.password) {
            props.dispatch(loginAction(state.email, state.password))
        }
    }

    // check if provided email is an admin or employee and forward to the corresponding page

    return (
        <div className="landingpage-container">
            <div className="landingpage-header">
                <h1 id='razzpay-main-title'>Razzpay</h1>
                <h3 id='main-subtitle'>Introducing the people platform for small businesses. <br/>
                    One place to run payroll, manage benefits, <br/> and support your team.</h3>
            </div>
            <div className="authentication-container">
                <div className="register">
                    <form className="register-form" onSubmit={handleSubmit}>
                        <InputField content={"Email"} name={"registrationEmail"} value={state.registrationEmail}
                                    onChange={handleChange}/>
                        <span className="input-span"></span>
                        <AuthenticationButton content={"Register"}/>
                    </form>
                </div>
                <div className="login">
                    <form onSubmit={handleSubmit}>
                        <InputField content={"Email"} name={"email"} value={state.email} onChange={handleChange}/>
                        <span className="input-span"></span>
                        <InputField content={"Password"} type={"password"} name={"password"} value={state.password}
                                    onChange={handleChange}/>
                        <span className="input-span"></span>
                        <AuthenticationButton content={"Login"} onSubmit={handleSubmit}/>
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

const mapStatetoProps = (state) => {
    console.log('the login state: ', state)
    return {
        tokens: state.tokens,
    }
}

export default connect(mapStatetoProps)(LandingPage)
