import React, { useState } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { createTextMask } from 'redux-form-input-masks'
import { connect, useSelector } from 'react-redux'

import Button from '../../template/Button'

const FormRegisterAnimal = props => {
	const { handleSubmit, isOtherValue, handleImage } = props

    const [files] = useState(props.images)
	const utils = useSelector(state => state.utils)

	const phoneMask = createTextMask({
		pattern: '(99) 99999-9999'
	})

	const renderImages = () => 
		files.map((element, index) => (
			<img
				key={ index }
				style={{
					clear: 'both',
					width: '100px',
					height: '100px',
					margin: '0px 5px',
					marginTop: '-14px',
					borderRadius: '3px'
				}}
				src={ URL.createObjectURL(element) }
				alt='img report'
			/>
		))

	return (
		<form
			onSubmit={ handleSubmit }
			className='form-group'
			encype='multipart/form-data'>
			{/* Information about the responsible of the animal */}
			<h4>
				<b>Informações sobre o responsável</b>
			</h4>
			<div className='row'>
				<div className='col-md-6'>
					<label>Nome</label>
					<div className='input-group'>
						<span className='input-group-addon'>
							<i className='fas fa-signature' />
						</span>
						<Field
							required
							name='ownerAnimalForm'
							component='input'
							type='text'
							placeholder='Name'
							className='form-control'
						/>
					</div>
					<h5 className='description'>
						*Campo obrigatório - Nome do responsável pelo animal
					</h5>
				</div>
				<div className='col-md-6'>
					<label>Endereço</label>
					<div className='input-group'>
						<span className='input-group-addon'>
							<i className='fas fa-home' />
						</span>
						<Field
							name='adressNewAnimalForm'
							component='input'
							type='text'
							placeholder='Ex.: ONG Pet+ Avenida Paraguassú - 000 '
							className='form-control'
						/>
					</div>
					<h5 className='description'>*Onde o animal está</h5>
				</div>
			</div>
			<div className='row mb-3'>
				<div className='col-md-3'>
					<label>Telefone</label>
					<div className='input-group'>
						<span className='input-group-addon'>
							<i className='fas fa-phone'></i>
						</span>
						<Field
							{...phoneMask}
							name='phoneNewAnimalForm'
							component='input'
							type='tel'
							placeholder='(__) _____-____'
							className='form-control'
						/>
					</div>
				</div>
				<div className='col-md-3'>
					<label>E-mail</label>
					<div className='input-group'>
						<span className='input-group-addon'>
							<i className='fas fa-at' />
						</span>
						<Field
							name='emailNewAnimalForm'
							component='input'
							type='email'
							placeholder='exemplo@gmail.com'
							className='form-control'
						/>
					</div>
				</div>
			</div>

			{/* Information about the responsible of the animal */}
			<h4>
				<b>Informações sobre o animal</b>
			</h4>
			<div className='row'>
				<div className='col-md-6'>
					<label>Título do registro/Nome do animal</label>
					<div className='input-group'>
						<span className='input-group-addon'>
							<i className='fas fa-paw' />
						</span>
						<Field
							required
							name='titleNewAnimalForm'
							component='input'
							type='text'
							placeholder='Ex.: Marley ou Cão dócil peludo'
							className='form-control'
						/>
					</div>
					<h5 className='description'>*Campo obrigatório</h5>
				</div>
				<div className='col-md-2 mb-3'>
					<label>Porte</label>
					<div className='input-group'>
						<span className='input-group-addon'>
							<i className='fas fa-weight' />
						</span>
						<Field
							required
							name='sizeNewAnimalForm'
							component='select'
							className='form-control select'>
							<option value='' disabled defaultValue>
								Selecione
							</option>
							<option>Pequeno</option>
							<option defaultChecked>Médio</option>
							<option>Grande</option>
						</Field>
					</div>
					<h5 className='description'>*Campo obrigatório</h5>
				</div>
				<div className='col-md-2'>
					<label>Idade</label>
					<div className='input-group'>
						<span className='input-group-addon'>
							<i className='fas fa-heart' />
						</span>
						<Field
							name='ageNewAnimalForm'
							component='select'
							className='form-control select'>
							<option value='' disabled defaultValue>
								Selecione
							</option>
							<option>Filhote</option>
							<option defaultChecked>Adulto</option>
							<option>Idoso</option>
						</Field>
					</div>
					<h5 className='description'>*Campo obrigatório</h5>
				</div>
				<div className='col-md-2'>
					<div className='mt-5'>
						<br />
						<Field
							name='castratedNewAnimalForm'
							component='input'
							type='checkbox'
							id='cbx'
							className='inp-cbx'
						/>
						<label className='cbx' id='cbxLabel' htmlFor='cbx'>
							<span>
								<svg
									width='12px'
									height='10px'
									viewBox='0 0 12 10'>
									<polyline points='1.5 6 4.5 9 10.5 1' />
								</svg>
							</span>
							<span>Animal castrado</span>
						</label>
					</div>
				</div>
				<div className='col-md-6 mb-3'>
					<label>Vacinas</label>
					<div className='input-group'>
						<span className='input-group-addon'>
							<i className='fas fa-syringe' />
						</span>
						<Field
							name='vaccinesNewAnimalForm'
							component='input'
							placeholder='Ex.: Vacina antirrábica, V8, V10'
							type='text'
							className='form-control'
						/>
					</div>
					<h5 className='description'>
						*Vacinas já tomadas pelo animal
					</h5>
				</div>
				<div className='col-md-3'>
					<label>Espécie</label>
					<div className='input-group'>
						<span className='input-group-addon'>
							<i className='fas fa-bone' />
						</span>
						<Field
							name='speciesNewAnimalForm'
							component='select'
							className='form-control select'>
							<option value='' disabled defaultValue>
								Selecione um tipo
							</option>
							<option>Cão</option>
							<option>Gato</option>
							<option value='isOther'>Outro</option>
						</Field>
					</div>
					<h5 className='description'>*Campo obrigatório</h5>
				</div>
				{isOtherValue === 'isOther' && (
					<div className='col-12 col-md-3'>
						<label>Expecifique a espécie</label>
						<div className='input-group'>
							<Field
								required
								name='otherSpecieNewAnimalForm'
								component='input'
								type='text'
								className='form-control'
							/>
						</div>
						<h5 className='description'>*Campo obrigatório</h5>
					</div>
				)}
				<div className='col-md-3'>
					<label>Sexo</label>
					<div className='input-group'>
						<span className='input-group-addon'>
							<i className='fas fa-venus-mars' />
						</span>
						<Field
							name='sexNewAnimalForm'
							component='select'
							className='form-control select'>
							<option value='' disabled defaultValue>
								Selecione
							</option>
							<option>Macho</option>
							<option>Fêmea</option>
						</Field>
					</div>
					<h5 className='description'>*Campo obrigatório</h5>
				</div>
			</div>
			<div className='row mb-3'>
				<div className='col-md-12'>
					<label>Descrição</label>
					<Field
						name='descriptionNewAnimalForm'
						component='textarea'
						className='form-control'
						rows='4'
						placeholder='Aqui você descreve o animal. Pode contar um pouco da história dele também'
					/>
				</div>
			</div>
			<br />
			
			{ renderImages() }
			
			<label
				htmlFor='select-pictures'
				style={{
					clear: 'both',
					width: '100px',
					height: '100px',
					margin: '5px',
					backgroundColor: '#3c8dbc',
					color: '#fff',
					border: 'none',
					borderRadius: '3px',
					padding: '28px 35px',
					fontSize: '32px',
					cursor: 'pointer'
				}}>
				<i className='fas fa-plus'></i>
			</label>
			<h5 className='description'>
				*Insira imagens claras que caracterizem e descrevam a denúncia
			</h5>
			<input
				id='select-pictures'
				type='file'
				name='images'
				accept='image/png, image/jpeg'
				onChange={ handleImage }
				multiple
				style={{ display: 'none' }}
			/>
			<div className='box-footer'>
				<Button 
					label='Cadastrar'
					loading={ utils.loading }
				/>
			</div>
		</form>
	)
}

const FormRegisterAnimalDecored = reduxForm({ form: 'newAnimalForm' })(
	FormRegisterAnimal
)

const selector = formValueSelector('newAnimalForm')

const FormRegisterAnimalDecored2 = connect(state => {
	const isOtherValue = selector(state, 'speciesNewAnimalForm')

	return { isOtherValue }
})(FormRegisterAnimalDecored)

export default FormRegisterAnimalDecored2
