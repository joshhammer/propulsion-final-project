import React, {useEffect} from "react";
import '../../AppContainer.scss';
import './CompanyPeople.scss';
import InputField from "../../../reusable-components/input-fields/InputField";
import AuthenticationButton from "../../../reusable-components/buttons/AuthenticationButton";
import TableRow from "../../../reusable-components/TableRow/Tablerow";
import {connect} from "react-redux";
import {getAllUsersAction} from "../../../../store/actions/getAllUsersAction";

const CompanyPeople = (props) => {
    useEffect(() => {
        props.dispatch(getAllUsersAction())
    }, [])

    return (
        <div className="company-people pages-container">
            <div className="company-people-header">
                <div className="company-people-allpeople">
                    <h2>All People</h2>
                </div>
                <div className="company-people-search">
                    <InputField id="search-input" content={"Search..."}/>
                </div>
                <div>
                    <AuthenticationButton content={"Add Employee +"}/>
                </div>
            </div>
            <div className="company-people-table-container">
                <div className="company-people-table-header">
                    <h2>Name</h2>
                    <h2 id="table-role">Role</h2>
                </div>
                <div className="company-people-table-content">
                    {
                        props.users &&
                        props.users.map((user, i) => {
                            return <TableRow key={i} firstName={user.first_name} lastName={user.last_name} salary={user.salary.position}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        users: state.userReducer.users
    }
}

export default connect(mapStatetoProps)(CompanyPeople)
