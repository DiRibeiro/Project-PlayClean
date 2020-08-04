import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStatus ,getCataTreco, removeCataTreco } from '../actions/cataTrecoActions'

import { fullDate, shortDate } from '../helper/date'
import { useEffect } from 'react'


import 'react-widgets/dist/css/react-widgets.css'


const ShowCataTrecoDetails = props => { 
	const dispatch = useDispatch()
	const cataTreco = useSelector(state => state.cataTreco.list)
	const ct = cataTreco.find(element => element._id === props.location.state) || undefined
    
    const [dateToCollect, setDateToCollect] = useState('');

	useEffect(() => {
		dispatch(getCataTreco())
	}, [])
    
    /*
	const showStatus = () => (
		<div className='showStatus'>
			<button className="btn btn-success showBtn"
				onClick={ () => dispatch(setStatus(0, cataTreco._id), window.location='/listCataTreco') }
			>Agendado
			</button>
			<button className="btn btn-dark showBtn"
				onClick={ () => dispatch(setStatus(1, cataTreco._id), window.location='/listCataTreco') }
			>Realizado
			</button>
        	<button className="btn btn-warning showBtn"
				onClick={ () => dispatch(setStatus(2, cataTreco._id), window.location='/listCataTreco') }
			>Pendente
			</button>
		</div>
    )
    */

    const updateStatus = () => {
        console.log("Updating...")
        console.log(ct, dateToCollect)
        let date = new Date(new Date(dateToCollect).getTime() + 12 * 3600 * 1000)
        dispatch(setStatus(ct._id, 1, date));
        
    }

    const remove = () => {
        dispatch(removeCataTreco(ct._id));
    
    }

	return ct !== undefined ? (
		<div className='box box-success'>
			<div className='box-body'>
				<div className='row'>
					
					{ /* Info */ }
					<div className='col-xl-8 col-md-6'>
                    {/* showStatus() */}
						<h3>Cata-Treco</h3>
						<br />
						<span>
							Cadastrado dia: { fullDate(ct.dateCreate) }
						</span>
						<br />
						<br />
						<b>Protocolo: </b>
						{ ct.protocol }
						<b>Onde ocorreu: </b>
						{ ct.adressOcurr }
						<br />
						{ <h4>Informações sobre o denunciante: </h4> }
						<b>Nome: </b>
						{ ct.name }
						<br />
						<b>Cpf: </b>
						{ ct.cpf }
						<br />
						<b>Local: </b>
						{ ct.local }
						<br />
						<b>Descrição: </b>
						{ ct.description }
					</div>
				</div>
			</div>
            
            {ct.status == 0 ? 
            <div style={{marginLeft: 20}}>
                <h3>Agendar para</h3>
                <div style={{display: 'flex'}}>
                <input  style={{width: '300px'}}
                    id='dateToCollect'
                    className='form-control inputDate'
                    onChange={(e) => setDateToCollect(e.target.value)}
                    name='dateToCollect'
                    type='date'
                    format='dd/MM/yyyy'
                    value={dateToCollect}
                />
				<button onClick={() => updateStatus()}>Confirmar</button>	
                </div>
                <br></br>
                <button onClick={() => remove()}>Remover</button>
            </div>
            :
            <div style={{marginLeft: 20}}> 
                <h2>Agendado pra o dia: {shortDate(ct.dateToCollect)}</h2>
                <div style={{display: 'flex'}}>
                <input  style={{width: '300px'}}
                    id='dateToCollect'
                    className='form-control inputDate'
                    onChange={(e) => setDateToCollect(e.target.value)}
                    name='dateToCollect'
                    type='date'
                    format='dd/MM/yyyy'
                    value={dateToCollect}
                />
                <button onClick={() => updateStatus()}>Atualizar Agendamento</button>	
                </div>
                <br></br>
                <button onClick={() => remove()}>Remover</button>
            </div>
            }
            <br></br>
		</div>
	) : (
		<>{ (window.location = '/listCataTreco') }</>
	)
 }

export default ShowCataTrecoDetails