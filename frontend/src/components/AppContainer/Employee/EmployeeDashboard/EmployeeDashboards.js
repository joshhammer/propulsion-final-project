import React from "react";
import '../../AppContainer.scss';
import './EmployeeDashboard.scss'

class EmployeeDashboard extends React.Component {
    render() {
        return (
            <div className="employee-dashboard-wrapper pages-container">
                <div className='employee-dashboard-container'>
                    <div className='employee-dashboard-title-box'>
                        <div className='employee-dashboard-title-and-logo'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="columns" class="svg-inline--fa fa-columns fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"></path></svg>                            
                            <h1>Dashboard</h1>
                        </div>
                    </div>
                    <div className='employee-dashboard-content'>
                        Content
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeDashboard;