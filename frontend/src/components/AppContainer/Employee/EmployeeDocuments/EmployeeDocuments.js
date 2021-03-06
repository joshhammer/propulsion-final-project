import React from 'react'
import SingleDocument from './SingleDocument'
import './EmployeeDocuments.scss'

class EmployeeDocuments extends React.Component {
    render() {
        return(
            <div className='pages-container employee-documents-wrapper'>
                <div className='employee-documents-content'>
                    <div className='employee-documents-title-box'>
                        <div className='employee-documents-title-and-logo'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-alt" className="svg-inline--fa fa-file-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg>
                            <h1>Documents</h1>
                        </div>
                        <div className='employee-document-upload'>
                            <h3>Document Upload</h3>
                            <a href="">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-up" className="svg-inline--fa fa-arrow-circle-up fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"></path></svg>                            </a>
                        </div>
                    </div>
                    <div className='employee-documents-divider'>
                        <div className='employee-documents-left-section'>
                            <h3>Company Documents</h3>
                            <SingleDocument name='Spesenformular.xls'/>
                            <SingleDocument name='Verhalten_am_Arbeitsplatz.doc'/>
                            <SingleDocument name='Sicherheitsregeln.doc'/>
                            <SingleDocument name='Ferienantrag.xls'/>
                        </div>
                        <div className='employee-documents-right-section'>
                            <h3>Your Documents</h3>
                            <SingleDocument name='Spesenabrechnung_mai.xls'/>
                            <SingleDocument name='Arztzeugnis.doc'/>
                            <SingleDocument name='Anmeldung_Sommerfest.doc'/>
                            <SingleDocument name='Spesenabrechnung_märz.xls'/>
                            <SingleDocument name='Quittungen.pdf'/>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeDocuments