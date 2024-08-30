import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { setStatus, getCataTreco, removeCataTreco } from '../actions/cataTrecoActions';
import { fullDate, shortDate } from '../helper/date';

const ShowCataTrecoDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const cataTreco = useSelector(state => state.cataTreco.list);
    const ctId = location.state?.id; // Ajuste para acessar o ID do estado passado
    const ct = cataTreco.find(element => element._id === ctId) || undefined;
    
    const [dateOcurr, setDateOcurr] = useState('');

    useEffect(() => {
        dispatch(getCataTreco());
    }, [dispatch]);

    const updateStatus = () => {
        if (ct && dateOcurr && new Date(dateOcurr) >= new Date(ct.dateCreate)) {
            const date = new Date(dateOcurr);
            dispatch(setStatus(ct._id, 1, date));
        }
    };

    const remove = () => {
        if (ct) {
            dispatch(removeCataTreco(ct._id));
        }
    };

    if (!ct) {
        navigate('/listCataTreco');
        return null;
    }

    return (
        <div className='box box-success'>
            <div className='box-body'>
                <div className='row'>
                    <div className='col-xl-8 col-md-6'>
                        <h3>Cata-Treco</h3>
                        <br />
                        <span>
                            Cadastrado dia: {fullDate(ct.dateCreate)}
                        </span>
                        <br />
                        <br />
                        <b>Protocolo: </b>{ct.protocol}
                        <br />
                        <b>Onde ocorreu: </b>{ct.adressOcurr}
                        <br />
                        <h4>Informações sobre o denunciante:</h4>
                        <b>Nome: </b>{ct.name}
                        <br />
                        <b>Cpf: </b>{ct.cpf}
                        <br />
                        <b>Local: </b>{ct.local}
                        <br />
                        <b>Descrição: </b>{ct.description}
                    </div>
                </div>
            </div>
            
            {ct.status === 0 ? (
                <div style={{ marginLeft: 20 }}>
                    <h3>Agendar para</h3>
                    <div style={{ display: 'flex' }}>
                        <input
                            style={{ width: '300px' }}
                            id='dateOcurr'
                            className='form-control'
                            onChange={(e) => setDateOcurr(e.target.value)}
                            name='dateOcurr'
                            type='date'
                            value={dateOcurr}
                        />
                        <button 
                            className='btn btn-primary'
                            onClick={updateStatus}
                        >
                            Confirmar
                        </button>
                    </div>
                    <br />
                    <button 
                        className='btn btn-danger'
                        onClick={remove}
                    >
                        Remover
                    </button>
                </div>
            ) : (
                <div style={{ marginLeft: 20 }}>
                    <h2>Agendado para o dia: {shortDate(ct.dateOcurr)}</h2>
                    <div style={{ display: 'flex' }}>
                        <input
                            style={{ width: '300px' }}
                            id='dateOcurr'
                            className='form-control'
                            onChange={(e) => setDateOcurr(e.target.value)}
                            name='dateOcurr'
                            type='date'
                            value={dateOcurr}
                        />
                        <button 
                            className='btn btn-primary'
                            style={{ width: 'auto' }}
                            onClick={updateStatus}
                        >
                            Atualizar Agendamento
                        </button>
                    </div>
                    <br />
                    <button 
                        className='btn btn-danger'
                        onClick={remove}
                    >
                        Remover
                    </button>
                </div>
            )}
            <br />
        </div>
    );
};

export default ShowCataTrecoDetails;
