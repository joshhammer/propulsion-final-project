import React from "react";
import './CardContent.scss';
import CardContentRow from "../CardContentRow/CardContentRow";

const CardContent = (props) => {
    return (
        <div className={`card-content ${props.isHidden ? ' hidden' : ''}`}>
            <div className="card-content-row">
                <CardContentRow name={"Piotr Schawinski"} role={"Rocket Scientist"} gross_month={10000}/>
            </div>
            <div className="card-content-row">
                <CardContentRow name={"Alfred Meier"} role={"Cook"} gross_month={5000}/>
            </div>
            <div className="card-content-row">
                <CardContentRow name={"David"} role={"DJ"} gross_month={6000}/>
            </div>
            <div className="card-content-row">
                <CardContentRow name={"Peter Meier"} role={"Full Stuck Dev"} gross_month={4000}/>
            </div>
        </div>
    )
}

export default CardContent