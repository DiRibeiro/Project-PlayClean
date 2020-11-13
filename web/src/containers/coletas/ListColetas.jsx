import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Loader from 'react-loader-spinner'

// import RowReport from '../containers/RowReport'
import { getColeta, deleteColeta } from '../../actions/coletaActions'

const ListColetas = () => {
	const dispatch = useDispatch()
	const allColetas = useSelector(state => state.coleta.coleta)

	useEffect(() => {
		dispatch(getColeta())
	}, [])

	const removeColeta = id => {
        dispatch(deleteColeta(id));
    }

    const renderColetas = () => {
        return allColetas.map(coleta => (
            <tr key={coleta._id}>
                <td>{coleta.neighborhood}</td>
                <td>{coleta.type === 'organica' ? 'Orgânica' : 'Seletiva' || 'seletiva'}</td>
                <td>{coleta.description}</td>
                <td>
                    <button className="btn-danger"
                        onClick={() => removeColeta(coleta._id)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
                <hr/>
            </tr>
        ));
    }

	return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Bairro</th>
                    <th>Tipo de Coleta</th>
                    <th>Dia e Turno</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderColetas()}
            </tbody>
        </table>
	)
}

export default ListColetas