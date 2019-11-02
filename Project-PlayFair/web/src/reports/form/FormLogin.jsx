import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { useSelector } from 'react-redux'

const FormLogin = props => {

	const loading = useSelector(state => state.auth.loading)

	// return (
	// 	<div className='login-box'>
	// 		<div className='login-box-body'>
	// 			<div className='login-logo'>
	// 				<img
	// 					className='mb-4 logologin'
	// 					src='img/EcoPet-v3.png'
	// 					alt=''
	// 					width='45%' />
	// 			</div>
	// 			<form onSubmit={props.handleSubmit}>
	// 				<div className='inputCred'>
	// 					<div className='form-group'>
	// 						<div className='input-group'>
	// 							<span className='input-group-addon'>
	// 								<i className='fas fa-signature'></i>
	// 							</span>
	// 							<Field
	// 								required
	// 								name='email'
	// 								component='input'
	// 								type='text'
	// 								placeholder='username@email.com'
	// 								className='form-control titleNewAnimal'
	// 							/>
	// 						</div>
	// 					</div>
	// 					<div className='form-group'>
	// 						<div className='input-group'>
	// 							<span className='input-group-addon'>
	// 								<i className='fas fa-key'></i>
	// 							</span>
	// 							<Field
	// 								required
	// 								name='password'
	// 								component='input'
	// 								type='password'
	// 								placeholder='yourpassword'
	// 								className='form-control titleNewAnimal'
	// 							/>
	// 						</div>
	// 					</div>
	// 					<div className='form-group' id='cbxLogin'>
	// 						<input
	// 							className='inp-cbx'
	// 							id='cbx'
	// 							type='checkbox' />
	// 						<label className='cbx' id='cbxLabel' htmlFor='cbx'>
	// 							<span>
	// 								<svg
	// 									width='12px'
	// 									height='10px'
	// 									viewBox='0 0 12 10'>
	// 									<polyline points='1.5 6 4.5 9 10.5 1' />
	// 								</svg>
	// 							</span>
	// 							<span className='color99'>
	// 								Lembre-se de mim
	// 							</span>
	// 						</label>
	// 						<button
	// 							type='submit'
	// 							className='btn btn-success btnLogin'
	// 							disabled={ loading ? true : false  }>
	// 							{ loading && <i className="fas fa-circle-notch fa-spin" style={{ marginRight: '8px' }}></i> }
	// 							Entrar
	// 						</button>
	// 					</div>
	// 				</div>
	// 			</form>

	// 			<hr className='hrcustom' />
	// 			<b>Esqueci minha senha</b>
	// 			<br />
	// 		</div>
	// 	</div>
	// )
	return (
		<div className="Login">
		  <header className="Login-header">
			  <img src='img/JogueLimpo.png' className="Login-logo" alt="logo" />
			  <div className='arrow'></div>
			  <form onSubmit={props.handleSubmit} className='form'>
				  <div className='row'>
					<div className='formTop'>
					  <div className='row'>
						<div className='col-auto'>
						  {/* <label className='inputUser'>Username</label> */}
						  <span className='fa fa-user user-row'>
							{/* <input className='user-form' type='text' name='name' placeholder='Username' /> */}
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
							{/* <label className='inputPasswd'>Password</label> */}
							<span className='fa fa-lock password-row'>
							  {/* <input className='passwd-form' type='password' name='passwd' placeholder='********' />  */}
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
					  <div className='row'>
						<div className='form-check'>
						  <input type='checkbox' className='form-check-input' />
						  <label className='inputCheck'>Lembrar minha senha.</label>
						</div>
					  </div>
					</div>
					<button className="submit">
					  <span>
						<i className='fa fa-sign-in'/>
					  </span>
					</button>
				  </div>
					  {/* <input className="btn btn-success btn-login" type="submit" /> */}
					  {/* <input className="btn btn-danger btn-cancel" type="reset" value="Cancel"/> */}
				</form>
		  </header>
		</div>
	  )
}

export default reduxForm({ form: 'formLogin' })(FormLogin)
