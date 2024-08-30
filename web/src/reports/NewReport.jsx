import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormReport from './form/FormReport';
import { postReport } from '../actions/reportActions';

const Report = props => {
    const dispatch = useDispatch();
    const [files, setFiles] = useState([]);

    const fileSelectedHandler = event => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
    };

    const handleForm = values => {
        const fd = new FormData();

        files.forEach(img => fd.append('images', img));

        Object.keys(values).forEach(key => {
            fd.append(key, values[key]);
        });

        // Clear files after submission
        setFiles([]);

        // Dispatch action to post report
        dispatch(postReport(fd, props.router));
    };

    return (
        <div className="box box-success">
            <div className="box-header with-border">
                <h3 className="box-title">Cadastrar denúncia</h3>
            </div>
            <div className="box-body">
                <FormReport 
                    onSubmit={handleForm}
                    handleImage={fileSelectedHandler}
                    images={files} 
                />
            </div>
        </div>
    );
};

export default Report;
