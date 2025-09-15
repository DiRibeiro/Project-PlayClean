import * as React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = (v) => (v ? undefined : 'Obrigatório');

function FormLei({ handleSubmit, handleDocument }) {
  return (
    <form onSubmit={handleSubmit} className="form-group" encType="multipart/form-data" noValidate>
      <div className="box box-success">
        <div className="box-header with-border" />
        <div className="box-body">
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="title">Título da lei</label>
              <div className="input-group">
                <span className="input-group-addon"><i className="fas fa-signature" /></span>
                <Field
                  id="title"
                  name="title"
                  component="input"
                  type="text"
                  placeholder="Título da lei"
                  className="form-control"
                  validate={required}
                />
              </div>
              <small className="requiredField">*Campo obrigatório</small>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="type">Tipo de lei</label>
              <div className="input-group">
                <Field id="type" name="type" component="select" className="form-control select" validate={required}>
                  <option value="" disabled>Selecione um tipo</option>
                  <option value="Municipal">Municipal</option>
                  <option value="Estadual">Estadual</option>
                  <option value="Federal">Federal</option>
                </Field>
              </div>
              <small className="requiredField">*Campo obrigatório</small>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="select-document">Documento (PDF)</label>
              <input
                id="select-document"
                type="file"
                accept="application/pdf"
                onChange={handleDocument}
              />
              <small className="description">*Selecione o documento PDF associado a esta LEI</small>
            </div>
          </div>

          <div className="box-footer">
            <button type="submit" className="btn btn-success btnLogin">Cadastrar</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default reduxForm({ form: 'newLeisForm' })(FormLei);
