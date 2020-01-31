import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import './CompanyDropzone.scss';
import AuthenticationButton from "../buttons/AuthenticationButton";

const baseStyle = {
    flex: 1,
    display: 'flex',
    width: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

function CompanyDropzone(props) {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        acceptedFiles,
    } = useDropzone({accept: ''});

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject
    ]);

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <div className="dropzone-container">
            <div className="dropzone-field" {...getRootProps({style})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <div className="dropzone-files-button">
                <aside className="dropzone-files">
                    <h4>Files</h4>
                    <ul>{files}</ul>
                </aside>
                <div>
                    <AuthenticationButton content={"Submit your files!"} onClick={'submitted'}/>
                </div>
            </div>
        </div>
    );
}

export default CompanyDropzone