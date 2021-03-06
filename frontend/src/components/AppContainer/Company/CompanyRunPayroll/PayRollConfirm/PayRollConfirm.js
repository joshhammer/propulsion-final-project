import React from "react";
import {connect} from "react-redux";
import InputField from "../../../../reusable-components/input-fields/InputField";
import './PayRollConfirm.scss';
import PopupButtonConfirm from "../../CompanyPeople/AddEmployee/Buttons/PopupButtonConfirm";
import PopupButtonCancel from "../../CompanyPeople/AddEmployee/Buttons/PopupButtonCancel";

const PayRollConfirm = (props) => {
    return (
        <>
            <div className="confirm-dialog-container">
                <div className="confirm-dialog-container-actions">
                    <div className="confirm-dialog-container-actions-header">
                        <h2>Confirm your payment of: <br />CHF {props.amount}</h2>
                    </div>
                    <div className="confirm-dialog-container-actions-password">
                        <InputField type={"password"} content={"Password"} name={"password"}/>
                    </div>
                    <div className={"confirm-dialog-buttons"}>
                        <PopupButtonConfirm content={"Pay"} type={'submit'} onClick={props.onClick}/>
                        <span className="confirm-span-dialog"/>
                        <PopupButtonCancel content={"Cancel"} onClick={props.isOpen}/>
                    </div>
                </div>
            </div>
            <div className="modal-overlay"/>
        </>
    )
};

export default connect()(PayRollConfirm)