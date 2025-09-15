import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormReport from './form/FormReport';
import { postReport } from '../actions/reportActions';

export default function Report() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [files, setFiles] = React.useState([]);

  const onFiles = React.useCallback((e) => {
    const selected = Array.from(e?.target?.files || []);
    setFiles((prev) => [...prev, ...selected]);
  }, []);

  const onSubmit = React.useCallback((values) => {
    const fd = new FormData();
    files.forEach((img) => fd.append('images', img));
    Object.keys(values || {}).forEach((k) => fd.append(k, values[k]));
    setFiles([]);
    dispatch(postReport(fd, navigate));
  }, [dispatch, navigate, files]);

  return (
    <div className="box box-success">
      <div className="box-header with-border">
        <h3 className="box-title">Cadastrar denúncia</h3>
      </div>
      <div className="box-body">
        <FormReport onSubmit={onSubmit} handleImage={onFiles} images={files} />
      </div>
    </div>
  );
}
