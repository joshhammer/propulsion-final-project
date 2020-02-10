import React, {useEffect, useState} from "react";
import '../../AppContainer.scss';
import './CompanyPeople.scss';
import InputField from "../../../reusable-components/input-fields/InputField";
import TableRow from "../../../reusable-components/TableRow/Tablerow";
import {connect} from "react-redux";
import {getAllUsersAction} from "../../../../store/actions/getAllUsersAction";
import AddEmployee from "./AddEmployee/AddEmployee";
import AuthenticationButton from "../../../reusable-components/buttons/AuthenticationButton";

const CompanyPeople = (props) => {
    useEffect(() => {
        props.dispatch(getAllUsersAction())
    }, [])

    const [isOpen, setisOpen] = useState(false);

    const toggleOpen = () => {
        setisOpen(isOpen => !isOpen)
    }

    return (
        <div className="company-people pages-container">
            {isOpen &&<div className={"company-people-modal-content"}>

                     <AddEmployee isOpen={toggleOpen}/>

            </div>}
            <div className="company-people-header">
                <div className="company-people-allpeople">
                    <h2>All People</h2>
                </div>
                <div className="company-people-search">
                    <InputField id="search-input" content={"Search..."}/>
                </div>
                <div className="company-people-modal">
                    <AuthenticationButton content={"Add Employee +"} onClick={toggleOpen}/>
                </div>
            </div>
            <div className="company-people-table-container">
                <div className="company-people-table-header">
                    <div><h2>Name</h2></div>
                    <div><h2 id="table-role">Role</h2></div>
                    <div><h2>Email</h2></div>
                </div>
                <div className="company-people-table-content">
                    {
                        props.users &&
                        props.users.map((user, i) => {
                            console.log('user: ', user)
                            return <TableRow key={i} firstName={user.first_name} lastName={user.last_name}
                                             position={user.salary.position} email={user.email}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
};

const mapStatetoProps = state => {
    return {
        users: state.userReducer.users
    }
};

export default connect(mapStatetoProps)(CompanyPeople)
