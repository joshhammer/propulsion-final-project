import React from "react";
import {connect} from "react-redux";
import InputField from "../../../../reusable-components/input-fields/InputField";
import AuthenticationButton from "../../../../reusable-components/buttons/AuthenticationButton";
import './PayRollConfirm.scss';

const PayRollConfirm = (props) => {
    console.log(props.amount)
    return (
        <>
            <div className="dialog-container">
                <div className="dialog-container-actions">
                    <h2>Confirm your payment of: CHF {props.amount}</h2>
                    <InputField type={"password"} content={"Password"} name={"password"}/>
                    <div className={"dialog-buttons"}>
                        <AuthenticationButton content={"Pay"} type={'submit'} onClick={props.onClick}/>
                        <span className="span-dialog"/>
                        <AuthenticationButton content={"Cancel"} onClick={props.isOpen}/>
                    </div>
                </div>
            </div>
            <div className="modal-overlay"/>
        </>
    )
};

export default connect()(PayRollConfirm)