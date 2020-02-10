import React, {useState} from 'react';
import AuthenticationButton from "../../../../reusable-components/buttons/AuthenticationButton";
import {connect} from "react-redux";
import InputField from "../../../../reusable-components/input-fields/InputField";
import './AddEmployee.scss';
import {newEmployeeRegistration} from "../../../../../store/actions/newEmployeeregistration";
import Zoom from 'react-reveal/Zoom';


const AddEmployee = (props) => {
    const [newEmployee, setnewEmployee] = useState({
        first_name: "",
        last_name: "",
        email: "",
        gross_month: "",
        position: "",
    });

    const handleChange = (e) => {
        setnewEmployee({
            ...newEmployee,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = async e => {
        e.preventDefault();
        let dispatch = await props.dispatch(newEmployeeRegistration(newEmployee))
        if (dispatch === 200) {
            props.isOpen();
        }
    };

    return (
        <>
            <Zoom duration={300}>
                <div className="dialog-container">
                        <div className="dialog-container-actions">
                            <h2>Invite an employee:</h2>
                            <form onSubmit={handleSubmit}>
                                <InputField content={"Firstname"} name={"first_name"} onChange={handleChange}
                                            value={newEmployee.first_name}/>
                                <span className="span-dialog"/>
                                <InputField content={"Lastname"} name={"last_name"} onChange={handleChange}
                                            value={newEmployee.last_name}/>
                                <span className="span-dialog"/>
                                <InputField content={"Email"} name={"email"} onChange={handleChange}
                                            value={newEmployee.email}/>
                                <span className="span-dialog"/>
                                <InputField content={"Salary"} name={"gross_month"} onChange={handleChange}
                                            value={newEmployee.gross_month}/>
                                <span className="span-dialog"/>
                                <InputField content={"Position"} name={"position"} onChange={handleChange}
                                            value={newEmployee.position}/>
                                <div className={"dialog-buttons"}>
                                    <AuthenticationButton content={"Save"} type={'submit'}/>
                                    <span className="span-dialog"/>
                                    <AuthenticationButton content={"Cancel"} onClick={props.isOpen}/>
                                </div>
                            </form>
                        </div>
                </div>
            </Zoom>
            <div className="modal-overlay"/>
        </>
)
};


export default connect()(AddEmployee)