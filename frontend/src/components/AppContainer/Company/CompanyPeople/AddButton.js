import React from "react";
import './AddButton.scss'
import {connect} from "react-redux";
import { ReactComponent as AddUser} from './../../../../assets/svg/user-plus.svg';

const AddButton = (props) => {
    return(
        <button className="add-button" onClick={props.onClick}>
            {props.content}
            <AddUser width={20} height={20}/>
        </button>
    )
}

export default connect()(AddButton)
