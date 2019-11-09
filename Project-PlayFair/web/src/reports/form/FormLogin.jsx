import React from 'react'
import { Field, reduxForm } from 'redux-form'
// import { useSelector } from 'react-redux'

const FormLogin = props => {

	// const loading = useSelector(state => state.auth.loading)

	return (
		<div className="Login">
		  <header className="Login-header">
			  <img src='img/JogueLimpo.png' className="Login-logo" alt="logo" />
			  <div className='arrow'></div>
			  <form onSubmit={props.handleSubmit} className='form'>
				  <div className='container'>
					<div className='formTop'>
					  <div className='row'>
						<div className='col-auto'>
						  <span className='fa fa-user user-row'>
							<Field
									required
									name='name'
									component='input'
									type='text'
									placeholder='Username'
									className='user-form'
								/>
						  </span>
						</div>
					  </div>
					  <div className='row'>
						<div className='col-auto'>
							<span className='fa fa-lock password-row'>
							  <Field
									required
									name='password'
									component='input'
									type='password'
									placeholder='********'
									className='passwd-form'
								/>
							</span>
						</div>
					  </div>
						<div className='form-check'>
						  <input type='checkbox' className='form-check-input' />
						  <label className='inputCheck'>Lembrar minha senha.</label>
						</div>
					  
					</div>
					<div className='btn-layout'>
					  <input 
						  className="btn btn-success btn-login"
						  type="submit"
						  value="Login" />
					  <input 
						  className="btn btn-danger btn-cancel" 
						  type="reset" 
						  value="Clear"/>
					</div>
				  </div>
				</form>
		  </header>
		</div>
	  )
}

export default reduxForm({ form: 'formLogin' })(FormLogin)
