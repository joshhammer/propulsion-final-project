import React from 'react';
import {connect} from 'react-redux'
import CompanyProfileData from './CompanyProfileData';
import {patchCompanyAction} from "../../../../store/actions/patchCompanyAction";
import {getCompanyAction} from "../../../../store/actions/getCompanyAction";

class CompanyDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            readonly: true,
        }
    }

    componentDidMount() {
        this.props.dispatch(getCompanyAction())
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    toggleEdit = (event) => {
        this.setState({
            readonly: !this.state.readonly,
        })
    };

    cancelEdit = () => {
        this.setState({
            readonly: !this.state.readonly,
        })
    };

    saveAndUpdate = () => {
        this.toggleEdit();
        this.props.dispatch(patchCompanyAction(this.state))
    };

    render() {
        return (
            <div className='pages-container company-details-wrapper'>
                <div className='company-details-content'>
                    <div className='company-profile-header'>
                        <div className='company-profile-title-box'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building" class="svg-inline--fa fa-building fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path></svg>
                            <h1>{this.props.company.name}</h1>
                        </div>

                        {this.state.readonly ?
                            <button className='profile-edit-btn' onClick={this.toggleEdit}>edit</button> :
                            <button className='profile-save-btn' onClick={this.saveAndUpdate}>save</button>
                        }
                        {this.state.readonly ? '' :
                            <button className='profile-cancel-btn' onClick={this.cancelEdit}>cancel</button>}
                    </div>
                    <CompanyProfileData readonly={this.state.readonly} saveData={this.handleChange}
                                        inputState={this.state}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        company: state.companyReducer.company
    }
};

export default connect(mapStateToProps)(CompanyDetails)