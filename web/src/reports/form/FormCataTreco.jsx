import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { createTextMask } from 'redux-form-input-masks';

const cpfMask = createTextMask({ pattern: '999.999.999-99' });

const required = (v) => (v ? undefined : 'Obrigatório');

function Form({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form-group" noValidate>
      <div className="box box-success">
        <div className="box-header with-border">
          <h3 className="box-title">Agende a busca!</h3>
        </div>
        <div className="box-body">
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="name">Nome</label>
              <div className="input-group">
                <span className="input-group-addon"><i className="fas fa-user" /></span>
                <Field
                  id="name"
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Nome completo"
                  className="form-control"
                  autoComplete="name"
                  validate={required}
                />
              </div>
              <small className="requiredField">*Campo obrigatório</small>
            </div>

            <div className="col-md-6">
              <label htmlFor="cpf">CPF</label>
              <div className="input-group">
                <span className="input-group-addon"><i className="fas fa-address-card" /></span>
                <Field
                  {...cpfMask}
                  id="cpf"
                  name="cpf"
                  component="input"
                  type="text"
                  placeholder="___.___.___-__"
                  className="form-control"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="adressOcurr">Endereço</label>
              <div className="input-group">
                <span className="input-group-addon"><i className="fas fa-city" /></span>
                <Field
                  id="adressOcurr"
                  name="adressOcurr"
                  component="input"
                  type="text"
                  placeholder="Ex.: Avenida Brasil, 5000"
                  className="form-control"
                />
              </div>
              <small className="description">*Endereço do ocorrido</small>
            </div>

            <div className="col-md-6">
              <label htmlFor="local">Bairro</label>
              <div className="input-group">
                <span className="input-group-addon"><i className="fas fa-bars" /></span>
                <Field
                  id="local"
                  required
                  name="local"
                  component="input"
                  type="text"
                  placeholder="Ex.: Centro"
                  className="form-control"
                  validate={required}
                />
              </div>
              <small className="requiredField">*Campo obrigatório</small>
            </div>

            <div className="col-md-12" style={{ marginBottom: 20 }}>
              <label htmlFor="description">Descrição</label>
              <Field
                id="description"
                className="form-control"
                rows="4"
                name="description"
                component="textarea"
                placeholder="Descreva a denúncia por completo."
              />
              <small className="description">*Qualquer informação é útil</small>
            </div>
          </div>

          <div className="box-footer">
            <button type="submit" className="btn btn-success btnLogin">Agendar</button>
          </div>
        </div>
      </div>
    </form>
  );
}

let FormCataTreco = reduxForm({ form: 'newCataTrecoForm' })(Form);

const selector = formValueSelector('newCataTrecoForm');
FormCataTreco = connect((state) => {
  const typeReportValue = selector(state, 'typeReport');
  return { typeReportValue };
})(FormCataTreco);

export default FormCataTreco;
