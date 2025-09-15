import * as React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = (v) => (v ? undefined : 'Obrigatório');

function FormLogin({ handleSubmit }) {
  return (
    <div className="Login">
      <header className="Login-header">
        <img src="img/JogueLimpo.png" className="Login-logo" alt="logo" />
        <div className="arrow" />
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="container">
            <div className="formTop">
              <div className="row">
                <div className="col-auto">
                  <span className="fa fa-user user-row">
                    <Field
                      required
                      name="name"
                      component="input"
                      type="text"
                      placeholder="Username"
                      className="user-form"
                      autoComplete="username"
                      validate={required}
                    />
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="col-auto">
                  <span className="fa fa-lock password-row">
                    <Field
                      required
                      name="password"
                      component="input"
                      type="password"
                      placeholder="********"
                      className="passwd-form"
                      autoComplete="current-password"
                      validate={required}
                    />
                  </span>
                </div>
              </div>

              <div className="form-check">
                <input id="remember" type="checkbox" className="form-check-input" />
                <label htmlFor="remember" className="inputCheck">Lembrar minha senha.</label>
              </div>
            </div>

            <div className="btn-layout">
              <input className="btn btn-success btn-login" type="submit" value="Login" />
              <input className="btn btn-danger btn-cancel" type="reset" value="Clear" />
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}

export default reduxForm({ form: 'formLogin' })(FormLogin);
