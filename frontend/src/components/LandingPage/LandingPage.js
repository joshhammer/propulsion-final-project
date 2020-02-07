import React, {useState, useEffect} from 'react';
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
import { getUserAction } from '../../store/actions/getUserAction';

const LandingPage = (props) => {
    const [state, setState] = useState({
        registrationEmail: "",
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (state.registrationEmail) {
            await props.dispatch(registrationAction(state.registrationEmail))
            
        }
        if (state.email && state.password) {
            await props.dispatch(loginAction(state.email, state.password))
            
        }
        
    }
    
    // check if provided email is an admin or employee and forward to the corresponding page
    useEffect(() => {
        if(props.tokens.access) {
            console.log('ACCESS')
            const token = props.tokens.access
            props.dispatch(getUserAction(token))
        }
    }, [props.tokens])

    useEffect(() => {

        if(props.user.registration) {
            console.log('REGISTRATION')
            if(props.user.registration.profile_type === 'AP') {
                props.history.push('/company/dashboard')
            }
            else {
                props.history.push('/employee/dashboard')
            }
        }
    }, [props.user])


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
                        <AuthenticationButton content={"Login"} />
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
        tokens: state.loginReducer.tokens,
        user: state.userReducer.user,
    }
}

export default connect(mapStatetoProps)(LandingPage)
