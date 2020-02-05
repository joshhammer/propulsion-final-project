import React from "react";
import './CardContent.scss';
import CardContentRow from "../CardContentRow/CardContentRow";
import {connect} from "react-redux";

const CardContent = (props) => {
    return (
        <div className={`card-content ${props.isHidden ? ' hidden' : ''}`}>
            <div className="card-content-row">
                {
                    props.payDateDetails[props.payDate] && props.payDateDetails[props.payDate].length > 0 &&
                    props.payDateDetails[props.payDate].map((payment, i) => {
                        return (<CardContentRow key={i} payment={payment} />)
                    })
                }
            </div>
        </div>
    )
};

const mapStatetoProps = state => {
    return {
        payDateDetails: state.dateReducer.payDateDetails
    }
};

export default connect(mapStatetoProps)(CardContent)