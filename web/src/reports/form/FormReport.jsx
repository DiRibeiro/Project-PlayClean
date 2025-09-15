import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { createTextMask } from 'redux-form-input-masks';

const phoneMask = createTextMask({ pattern: '(99) 99999-9999' });
const required = (v) => (v ? undefined : 'Obrigatório');

function Form({ handleSubmit, handleImage, images = [] }) {
  // preview controlado e sem vazamento de URLs
  const previews = React.useMemo(() => images.map((f) => URL.createObjectURL(f)), [images]);
  React.useEffect(() => () => previews.forEach((u) => URL.revokeObjectURL(u)), [previews]);

  return (
    <form onSubmit={handleSubmit} className="form-group" encType="multipart/form-data" noValidate>
      <h4><b>Dados do usuário</b></h4>
      <div className="row mb-3">
        <div className="col-md-4">
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
            />
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="phone">Telefone</label>
          <div className="input-group">
            <span className="input-group-addon"><i className="fas fa-phone" /></span>
            <Field
              {...phoneMask}
              id="phone"
              name="phone"
              component="input"
              type="tel"
              placeholder="(__) _____-____"
              className="form-control"
              autoComplete="tel"
            />
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="dateOcurr">Data do ocorrido</label>
          <div className="input-group">
            <span className="input-group-addon"><i className="fas fa-calendar" /></span>
            <Field id="dateOcurr" name="dateOcurr" type="date" component="input" className="form-control" />
          </div>
        </div>
      </div>

      <hr className="hrcustom" />

      <h4><b>Dados da denúncia</b></h4>
      <div className="row mb-3">
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
          <label htmlFor="typeReport">Tipo de denúncia</label>
          <div className="input-group">
            <span className="input-group-addon"><i className="fas fa-bars" /></span>
            <Field id="typeReport" required name="typeReport" component="select" className="form-control select" validate={required}>
              <option value="" disabled>Selecione um tipo</option>
              <option>Lixo e caliças em área irregular</option>
              <option>Caminhão não passou</option>
              <option>Atraso do caminhão de lixo</option>
              <option>Descarte de volumosos</option>
            </Field>
          </div>
          <small className="requiredField">*Campo obrigatório</small>
        </div>
      </div>

      <div className="row">
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

      {/* Previews */}
      {previews.length > 0 && previews.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`img report ${i + 1}`}
          style={{ width: 100, height: 100, margin: '0 5px', marginTop: -14, borderRadius: 3 }}
        />
      ))}

      <label
        htmlFor="select-pictures"
        style={{
          width: 100, height: 100, margin: 5, backgroundColor: '#00a65a', color: '#fff',
          border: 'none', borderRadius: 3, padding: '28px 35px', fontSize: 32, cursor: 'pointer',
        }}
      >
        <i className="fas fa-photo" />
      </label>
      <input
        id="select-pictures"
        type="file"
        name="images"
        accept="image/png, image/jpeg"
        onChange={handleImage}
        multiple
        style={{ display: 'none' }}
      />

      <div className="box-footer">
        <button type="submit" className="btn btn-success btnLogin">Cadastrar</button>
      </div>
    </form>
  );
}

let FormReport = reduxForm({ form: 'newReportForm' })(Form);

const selector = formValueSelector('newReportForm');
FormReport = connect((state) => {
  const typeReportValue = selector(state, 'typeReport');
  return { typeReportValue };
})(FormReport);

export default FormReport;
