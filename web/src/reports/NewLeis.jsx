import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormLei from './form/FormLei';
import { postLeis } from '../actions/leisActions';

export default function Leis() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setFile] = React.useState(null);

  const handleFile = React.useCallback((e) => {
    const f = e?.target?.files?.[0] || null;
    setFile(f);
  }, []);

  const onSubmit = React.useCallback((values) => {
    const fd = new FormData();
    Object.keys(values || {}).forEach((k) => fd.append(k, values[k]));
    if (file) fd.append('document', file);
    setFile(null);
    dispatch(postLeis(fd, navigate));
  }, [dispatch, navigate, file]);

  return (
    <div>
      <h1>Registro de leis</h1>
      <div className="box box-success">
        <div className="box-header with-border">
          <h3 className="box-title">Informe a lei</h3>
        </div>
        <div className="box-body">
          <FormLei onSubmit={onSubmit} handleDocument={handleFile} />
        </div>
      </div>
    </div>
  );
}
