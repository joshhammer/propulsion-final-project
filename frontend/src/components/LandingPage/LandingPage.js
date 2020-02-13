import React, {useState, useEffect} from 'react';
import AuthenticationButton from '../reusable-components/buttons/AuthenticationButton';
import InputField from "../reusable-components/input-fields/InputField";
import { ReactComponent as Instagram } from '../../assets/svg/instagram-square-brands.svg';
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg';
import { ReactComponent as LinkedIn } from '../../assets/svg/linkedin.svg';
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
            const response = await props.dispatch(registrationAction(state.registrationEmail))
            if(response.status === 200) {
                props.history.push('/signupcompany')
            }
        }
        if (state.email && state.password) {
            await props.dispatch(loginAction(state.email, state.password))
            
        }
        
    }
    
    // check if provided email is an admin or employee and forward to the corresponding page
    useEffect(() => {
        if(props.tokens.access) {
            const token = props.tokens.access
            props.dispatch(getUserAction(token))
        }
    }, [props.tokens])

    useEffect(() => {

        if(props.user.registration) {
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
                {/* <div className="register">
                    <form className="register-form" onSubmit={handleSubmit}>
                        <InputField content={"Email"} name={"registrationEmail"} value={state.registrationEmail}
                                    onChange={handleChange}/>
                        <span className="input-span"></span>
                        <AuthenticationButton content={"Register"}/>
                    </form>
                </div> */}
                <div className="login">
                    <form onSubmit={handleSubmit}>
                        <InputField content={"Email"} name={"email"} value={state.email} onChange={handleChange}/>
                        <span className="input-span"></span>
                        <InputField content={"Password"} type={"password"} name={"password"} value={state.password}
                                    onChange={handleChange}/>
                        <span className="input-span"></span>
                        <AuthenticationButton content={"Login"} />
                    </form>
                    <div className='register-box'>
                        <p>Don't have an account yet?</p>
                        <a href="#">Register Here</a>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-left">
                    <a href='#'>About</a>
                    <a href='#'>Services</a>
                    <a href='#'>Pricing</a>
                    <a href='#'>Jobs</a>
                </div>
                <div className="footer-spaceholder"></div>
                <div className="footer-right">
                    {/* <img src={instagram} alt="instagram"/> */}
                    <a className='footer-icon' href='#'><Instagram width='25px' height='25px'/></a>
                    {/* <img src={facebook} alt="facebook"/> */}
                    <a className='footer-icon' href='#'><Facebook width='25px' height='25px'/></a>
                    {/* <img src={twitter} alt="twitter"/> */}
                    <a className='footer-icon' href='#'><Twitter width='25px' height='25px'/></a>
                    {/* <img src={linkedin} alt="linkedin"/> */}
                    <a className='footer-icon' href='#'><LinkedIn width='25px' height='25px'/></a>
                </div>
            </div>
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        tokens: state.loginReducer.tokens,
        user: state.userReducer.user,
    }
}

export default connect(mapStatetoProps)(LandingPage)
