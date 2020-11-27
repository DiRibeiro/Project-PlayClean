import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Loader from 'react-loader-spinner'

// import RowReport from '../containers/RowReport'
import { getColeta, deleteColeta, editColeta } from '../../actions/coletaActions'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ListColetas = (props) => {
	const dispatch = useDispatch();
	const allColetas = useSelector(state => state.coleta.coleta);
	const [open, setOpen] = useState(false);
	const [edit, setEdit] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

	useEffect(() => {
		dispatch(getColeta())
	}, [])

	const removeColeta = id => {
		dispatch(deleteColeta(id), window.location=('/listColetas'));
    }

	const handleUpdateOpen = () => {
        setEdit(true);
    };

    const handleUpdateClose = () => {
        setEdit(false);
    };

	const updateColeta = (id, neighborhood, organic, selective, descriptionOrganic, descriptionSelective) => {
		console.log(id, neighborhood, organic, selective, descriptionOrganic, descriptionSelective)
		dispatch(
			editColeta(
				id,
				neighborhood,
				organic,
				selective,
				descriptionOrganic,
				descriptionSelective,
			));        
	}

	const gera_cor = () => { 
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
		  color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	const renderColetas = () => {
        return allColetas.map((coleta, index) => (
			<tr 
				style={{color: 'black', fontSize: 12, fontWeight: 'bold', backgroundColor: gera_cor(), borderColor: `black`, borderStyle: 'solid'}}
				key={index}>
				{/* {console.log(gera_cor())} */}
                <td>{coleta.neighborhood}</td>
                <td>
					{coleta.organic}
					<br/>
					{coleta.selective}
				</td>
                <td>
					{coleta.dayOrganic}
					<br/>
					{coleta.daySelective}
				</td>
                <td>
					{coleta.descriptionOrganic}
					<br/>
					{coleta.descriptionSelective}
				</td>
                <td>
                <div className="btn-remove">
					<button 
						className="btn btn-danger btn-delete" 
						variant="outlined" 
						onClick={handleClickOpen}>
						<i className='fa fa-trash-o'></i>
					</button>
					<Dialog
						open={open}
						onClose={handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle id="alert-dialog-title">{"Deseja apagar esta coleta?"}</DialogTitle>
						{/* <DialogContent>
						<DialogContentText id="alert-dialog-description">
							Você está prestes a deletar uma denúncia, gostaria de continuar?
						</DialogContentText>
						</DialogContent> */}
						<DialogActions className='btn-dialog'>
						<button className="btn btn-danger" onClick={handleClose}>
							Não
						</button>
						<button className="btn btn-success" onClick={ () => removeColeta(coleta._id)}>
							Sim
						</button>
						</DialogActions>
					</Dialog>
				</div>
				<button
					className="btn btn-primary btn-delete" 
					variant="outlined" 
					onClick={ handleUpdateOpen }
					>
					<i className='fa fa-pencil'></i>
				</button>
				<div className='dialog-configure'>
				<Dialog
					open={edit}
					onClose={ handleUpdateClose }
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">Informe a edição.</DialogTitle>
					<form>
					<div className="box-body">
						<div className="row">
							<div className="col-md-3">
								<label>Bairro</label>
									<select  name="neighborhood" className="form-control select">
										<option value="" defaultValue>{coleta.neighborhood}</option>
										<option value="Aguapés" >Aguapés</option>
										<option value="Albatroz" >Albatroz</option>
										<option value="Arroio das Pedras" >Arroio das Pedras</option>
										<option value="Arroio Grande" >Arroio Grande</option>
										<option value="Atlântida Sul" >Atlântida Sul</option>
										<option value="Baixada" >Baixada</option>
										<option value="Barranceira" >Barranceira</option>
										<option value="Borrúsia" >Borrúsia</option>
										<option value="Bosque do Albatroz" >Bosque do Albatroz</option>
										<option value="Caconde" >Caconde</option>
										<option value="Caiu do Céu" >Caiu do Céu</option>
										<option value="Campos de Dentro" >Campos de Dentro</option>
										<option value="Cascata" >Cascata</option>
										<option value="Centro" >Centro</option>
										<option value="Costa Verde" >Costa Verde</option>
										<option value="Distrito Industrial" >Distrito Industrial</option>
										<option value="Estrada Posto Buffon" >Estrada Posto Buffon</option>
										<option value="Estrada Romildo Bolzan" >Estrada Romildo Bolzan</option>
										<option value="Estrada da Perua" >Estrada da Perua</option>
										<option value="Estrada do Mar" >Estrada do Mar</option>
										<option value="Farroupilha" >Farroupilha</option>
										<option value="Figueira Grande" >Figueira Grande</option>
										<option value="Goiabeira 1 e 2" >Goiabeira 1 e 2</option>
										<option value="Ilha" >Ilha</option>
										<option value="Interlagos" >Interlagos</option>
										<option value="Invernada" >Invernada</option>
										<option value="Jardim da Lagoa" >Jardim da Lagoa</option>
										<option value="Lagoa do Horácio" >Lagoa do Horácio</option>
										<option value="Laranjeiras" >Laranjeiras</option>
										<option value="Livramento" >Livramento</option>
										<option value="Loteamento Serramar" >Loteamento Serramar</option>
										<option value="Mariápolis" >Mariápolis</option>
										<option value="Marmeleiro" >Marmeleiro</option>
										<option value="Medianeira" >Medianeira</option>
										<option value="Morro da Antena" >Morro da Antena</option>
										<option value="Palmital" >Palmital</option>
										<option value="Panorâmico" >Panorâmico</option>
										<option value="Parque Eólico" >Parque Eólico</option>
										<option value="Parque Real" >Parque Real</option>
										<option value="Parque da lagoa" >Parque da lagoa</option>
										<option value="Parque de Rodeios" >Parque de Rodeios</option>
										<option value="Parque do Sol" >Parque do Sol</option>
										<option value="Passinhos" >Passinhos</option>
										<option value="Penitenciária Modulada" >Penitenciária Modulada</option>
										<option value="Ponta dos Dihel" >Ponta dos Dihel</option>
										<option value="Por do Sol" >Por do Sol</option>
										<option value="Porto Lacustre" >Porto Lacustre</option>
										<option value="RS 030" >RS 030</option>
										<option value="RST 101" >RST 101</option>
										<option value="Rincão" >Rincão</option>
										<option value="Santa Luzia" >Santa Luzia</option>
										<option value="Santa Rita" >Santa Rita</option>
										<option value="Sertão" >Sertão</option>
										<option value="Sindicato Rural" >Sindicato Rural</option>
										<option value="Sulbrasileiro" >Sulbrasileiro</option>
										<option value="Tombadouro" >Tombadouro</option>
										<option value="Trilhos" >Trilhos</option>
										<option value="Vila Brasília" >Vila Brasília</option>
										<option value="Vila Emboaba" >Vila Emboaba</option>
										<option value="Vila Petrobrás" >Vila Petrobrás</option>
										<option value="Vila Popular" >Vila Popular</option>
										<option value="Vila da Serra" >Vila da Serra</option>
										<option value="Vila dos Pescadores do Passo da Lagoa" >Vila dos Pescadores do Passo da Lagoa</option>
										<option value="Várzea do Padre" >Várzea do Padre</option>
									</select>
							</div>
							<div className="col-md-3">
								<label>Coleta Orgânica</label>
								<input defaultValue={coleta.organic} name='organic' type='text' className="form-control"/>
								<label>Coleta Seletiva</label>
								<input defaultValue={coleta.selective} name='selective' type='text' className="form-control"/>
							</div>
							<div className="col-md-3">
								<label>Turno Coleta Orgânica</label>
								<input defaultValue={coleta.descriptionOrganic} name='descriptionOrganic' type="text" className="form-control"/>
								<label>Turno Coleta Seletiva</label>
								<input defaultValue={coleta.descriptionSelective} name='descriptionSelective' type="text" className="form-control"/>
							</div>
							<div className="col-md-3">
								<label>Dia Coleta Orgânica</label>
								<select name='dayOrganic' className="form-control select">
									<option value="" disabled defaultValue>{coleta.dayOrganic}</option>
									<option value="Segunda-Feira" >Segunda-Feira</option>
									<option value="Terça-Feira" >Terça-Feira</option>
									<option value="Quarta-Feira" >Quarta-Feira</option>
									<option value="Quinta-Feira" >Quinta-Feira</option>
									<option value="Sexta-Feira" >Sexta-Feira</option>
									<option value="Sábado" >Sábado</option>
								</select>
								<label>Dia Coleta Seletiva</label>
								<select name='daySelective' className="form-control select">
									<option value="" disabled defaultValue>{coleta.daySelective}</option>
									<option value="Segunda-Feira" >Segunda-Feira</option>
									<option value="Terça-Feira" >Terça-Feira</option>
									<option value="Quarta-Feira" >Quarta-Feira</option>
									<option value="Quinta-Feira" >Quinta-Feira</option>
									<option value="Sexta-Feira" >Sexta-Feira</option>
									<option value="Sábado" >Sábado</option>
								</select>
							</div>
						</div>
					</div>
					<DialogActions className='btn-dialog'>
						<button className="btn btn-danger" onClick={handleUpdateClose}>
							Não
						</button>
						<button className="btn btn-success"
							onClick={ () =>
								updateColeta(
									coleta._id,
									coleta.neighborhood,
									coleta.organic,
									coleta.selective,
									coleta.descriptionOrganic,
									coleta.descriptionSelective,
									)
							}>
							Sim
						</button>
					</DialogActions>
					</form>
				</Dialog>
				</div>
                </td>
            </tr>
        ));
    }

	return (
		<div className="box box-success">
			<div className="box-header with-border">
			</div>
			<div className="box-body">
				<table className='table'>
					<thead>
						<tr>
							<th>Bairro</th>
							<th>Tipo de Coleta</th>
							<th>Dia</th>
							<th>Turno</th>
							<th className='tableActions'>Ações</th>
						</tr>
					</thead>
					<tbody>
						{renderColetas()}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default ListColetas