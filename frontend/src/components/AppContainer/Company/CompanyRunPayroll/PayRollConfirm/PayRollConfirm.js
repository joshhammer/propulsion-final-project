import React from "react";
import {connect} from "react-redux";
import InputField from "../../../../reusable-components/input-fields/InputField";
import AuthenticationButton from "../../../../reusable-components/buttons/AuthenticationButton";
import './PayRollConfirm.scss';

const PayRollConfirm = (props) => {
    console.log(props.amount)
    return (
        <>
            <div className="confirm-dialog-container">
                <div className="confirm-dialog-container-actions">
                    <div className="confirm-dialog-container-actions-header">
                        <h2>Confirm your payment of: CHF {props.amount}</h2>
                    </div>
                    <div className="confirm-dialog-container-actions-password">
                        <InputField type={"password"} content={"Password"} name={"password"}/>
                    </div>
                    <div className={"confirm-dialog-buttons"}>
                        <AuthenticationButton content={"Pay"} type={'submit'} onClick={props.onClick}/>
                        <span className="confirm-span-dialog"/>
                        <AuthenticationButton content={"Cancel"} onClick={props.isOpen}/>
                    </div>
                </div>
            </div>
            <div className="modal-overlay"/>
        </>
    )
};

export default connect()(PayRollConfirm)