import React from 'react';
import './SignupEmployee.scss';

class SignupEmployee extends React.Component {

    render() {
        return (
            <div className="signuppage-container">
                <div className="signup-authentication-container">
                    <div className='employee-signup-success'>
                        <h1>Thank you</h1>
                        <h3>Your verification process was successful <br />please <a href='/'>log in</a></h3>

                    </div>
                    
                </div>
            </div>
        )
    }
}

export default SignupEmployee