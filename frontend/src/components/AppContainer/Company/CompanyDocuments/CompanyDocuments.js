import React from "react";
import './CompanyDocuments.scss';
import CompanyDropzone from "../../../reusable-components/CompanyDropzone/CompanyDropzone";

const CompanyDocuments = () => {
    return (
        <div className="company-documents-container pages-container">
            <div className="company-documents-manager">
                <h1>DocZone</h1>
                <h2>Manage & share documents with employees.</h2>
            </div>
            <div className="company-documents-share">
                <h3>Drop & share with employees.</h3>
                <CompanyDropzone/>
            </div>
            <div className="company-documents-share">
                <h3>Drop & keep private to yourself.</h3>
                <CompanyDropzone/>
            </div>
        </div>
    )
};

export default CompanyDocuments