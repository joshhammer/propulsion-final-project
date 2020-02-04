import React, {useState} from "react";
import './CompanyReportTable.scss';
import ReportButton from "../ReportButton/ReportButton";
import CardContent from "../CardContent/CardContent";

const CompanyTableRow = (props) => {
    const [hidden, setHidden] = useState(true);
    const toggleShow = () => setHidden(!hidden);

    return (
        <div className="company-reportrow-container">
            <div className="company-reportrow">
                <div className="company-reportrow-details">
                    <div className="company-reportrow-details-date">
                        <p>25/11/2019</p>
                    </div>
                    <div className="company-reportrow-details-more">
                        <ReportButton content={"View Details"} toggle={toggleShow}/>
                    </div>
                </div>
                <div className="company-reportrow-type">
                    <p>Regular</p>
                </div>
                <div className="company-reportrow-period">
                    <p>1/11/2019-30/11/2019</p>
                </div>
                <div className="company-reportrow-debit">
                    <p>CHF 22,705.50</p>
                </div>
            </div>
            <div className="company-reportrow-toggle">
                <CardContent isHidden={hidden}/>
            </div>
        </div>
    )
};
export default CompanyTableRow