import React from 'react';
import Company from "./Company/Company";
import Employee from "./Employee/Employee";
import { connect } from 'react-redux';
import { getUserAction } from "../../store/actions/getUserAction";

class AppContainer extends React.Component {


    componentDidMount() {
        const token = this.props.token
        this.props.dispatch(getUserAction(token))
    }

    render() {
        return (
            <>
<<<<<<< HEAD
            {/* <Employee /> */}
                {   
=======
                {
>>>>>>> master
                    this.props.user.registration && this.props.user.registration.profile_type === 'AP' && <Company />
                }

                {
                    this.props.user.registration && this.props.user.registration.profile_type === 'EP' && <Employee />
                }
            </>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        token: state.loginReducer.tokens.access,
        user: state.userReducer.user,
    }
}

export default connect(MapStateToProps)(AppContainer)